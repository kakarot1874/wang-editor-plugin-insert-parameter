import React, { useState, useEffect } from 'react';
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-react'
import { IDomEditor, IEditorConfig, IToolbarConfig, Boot } from '@wangeditor/editor'
import { ParameterElement, ParameterOptions } from './parameter-plugins/typing';
import module from './parameter-plugins/index'

type Props = {
  parameterOptions: ParameterOptions
}

Boot.registerModule(module)

const RichText: React.FC<Props> = (props) => {
  const { parameterOptions } = props
  const [editor, setEditor] = useState<IDomEditor | null>(null)   // TS 语法
  const [text, setText] = useState('')

  // 编辑器内容
  const [html, setHtml] = useState('<p></p>')

  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>')
    }, 1500)
  }, [])

  // 工具栏配置
  const toolbarConfig: Partial<IToolbarConfig> = {
    toolbarKeys: ['insertParameter'],
  }

  // 编辑器配置
  const editorConfig: Partial<IEditorConfig> = {
    // hoverbarKeys: {
    //   parameter: {
    //     menuKeys: ['deleteParameter']
    //   }
    // },
    placeholder: '请输入内容...',
    maxLength: 300,
    MENU_CONF: {
      insertParameter: {
        options: parameterOptions,
        onInserted: (elem: ParameterElement) => {
          console.log('onInserted', elem)
        }
      }
    }
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  return (
    <>
      <div style={{ border: '1px solid #ccc', zIndex: 100 }}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{ borderBottom: '1px solid #ccc' }}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={editor => {
            setHtml(editor.getHtml())
            setText(editor.getText())
          }}
          mode="default"
          style={{ height: '500px', overflowY: 'hidden' }}
        />
      </div>
      <div style={{ marginTop: '15px' }}>
        {html}
      </div>
      <div style={{ marginTop: '15px' }}>
        {text}
      </div>
    </>
  );
}

export default RichText;
