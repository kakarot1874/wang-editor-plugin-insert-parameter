import { DomEditor, IDomEditor, ISelectMenu } from "@wangeditor/editor";
import { PARAMETER_SVG } from "../constants";
import { ParameterElement, ParameterOption, ParameterOptions } from "../typing";
import { getInsertParameterMenuConfig, insertParameter } from "./helper";

class InsertParameter implements ISelectMenu {
    readonly title = '插入参数'
    readonly iconSvg = PARAMETER_SVG
    readonly tag = 'select'
    readonly alwaysEnable = true
    readonly selectPanelWidth = 200

    getValue(editor: IDomEditor): string | boolean {
        const parameterElem = this.getSelectedElem(editor)
        if (parameterElem == null) return ''
        return parameterElem.value
    }

    isActive(editor: IDomEditor): boolean {
        return true
    }

    getOptions(editor: IDomEditor) {
        const options: ParameterOptions = getInsertParameterMenuConfig(editor).options
        const curValue = this.getValue(editor).toString()
        options.forEach((opt: ParameterOption) => {
            if (opt.value === curValue) {
                opt.selected = true
            } else {
                opt.selected = false
            }
        })
        return options;
    }

    isDisabled(editor: IDomEditor): boolean {
        return false
    }

    exec(editor: IDomEditor, value: string | boolean) {
        const { options } = getInsertParameterMenuConfig(editor)
        console.log('editor', editor)
        console.log('value', value)
        console.log('label', options.find(item => item.value === value)?.text)
        insertParameter(
            editor,
            options.find(item => item.value === value)?.text as string,
            value as string
        )
    }


    private getSelectedElem(editor: IDomEditor): ParameterElement | null {
        const node = DomEditor.getSelectedNodeByType(editor, 'parameter')
        if (node == null) return null
        return node as ParameterElement
    }

}

export default InsertParameter
