import { IDomEditor } from "@wangeditor/editor"
import { ParameterConfig } from "./config"
import { ParameterElement } from "../typing"

export function getInsertParameterMenuConfig(editor: IDomEditor): ParameterConfig {
    // 获取配置，见 `./config.js`
    return editor.getMenuConfig('insertParameter') as ParameterConfig
}

export function insertParameter(editor: IDomEditor, label: string, value: string) {
    if (!label || !value) return

    // 还原选区
    editor.restoreSelection()

    // 插入节点
    const parameterElem: ParameterElement = {
        type: 'parameter',
        value,
        label,
        children: [{ text: value as string }],
    }
    editor.insertNode(parameterElem)
    editor.move(1)

    // 回调
    const { onInserted } = getInsertParameterMenuConfig(editor)
    if (onInserted) onInserted(parameterElem)
}