import { IDomEditor, SlateElement } from "@wangeditor/editor"
import { h, VNode } from 'snabbdom'
import { ParameterElement } from "./typing"

function renderParameter(elem: SlateElement, children: VNode[] | null, editor: IDomEditor): VNode {
    // const isDisabled = editor.isDisabled()
    // 当前节点是否选中
    // const selected = DomEditor.isNodeSelected(editor, elem)
    // 构建 vnode
    const { value = '', label = '' } = elem as ParameterElement
    const vnode = h(
        'span',
        {
            props: {
                contentEditable: false, // 不可编辑
            },
            style: {
                margin: '0px 3px',
                backgroundColor: '#eee',
                color: '#666',
                padding: '2px 8px',
                borderRadius: '3px'
            },
            on: {
                click() {
                    console.log('value', value)
                }
            },
        },
        [
            label,
        ]
    )

    return vnode
}


const conf = {
    type: 'parameter', // 节点 type ，重要！！！
    renderElem: renderParameter,
}

export default conf