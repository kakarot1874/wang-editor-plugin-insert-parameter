import { IButtonMenu, IDomEditor } from "@wangeditor/editor";
import { PARAMETER_SVG } from "../constants";

class DeleteParameter implements IButtonMenu {
    readonly title = '删除参数'
    readonly iconSvg = PARAMETER_SVG
    readonly tag = 'button'
    readonly alwaysEnable = true

    getValue(editor: IDomEditor): string | boolean {
        return ''
    }
    
    isActive(editor: IDomEditor): boolean {
        // 任何时候，都不用激活 menu
        return true;
    }

    
    isDisabled(editor: IDomEditor): boolean {
        return false;
    }
    
    exec(editor: IDomEditor, value: string | boolean) {
        console.log('editor', editor)
        console.log('value', value)
    }
}

export default DeleteParameter;