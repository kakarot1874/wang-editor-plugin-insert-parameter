import { SlateElement } from '@wangeditor/editor'
import { ParameterElement } from './typing'

// 生成 html 的函数
function parameterToHtml(elem: SlateElement, childrenHtml: string): string {
    const { value = '', label = '' } = elem as ParameterElement
    return `<span 
    data-w-e-type="parameter" 
    data-w-e-is-void 
    data-w-e-is-inline 
    data-value="${value}" 
    data-label="${label}">
    ${label}
    </span>`
}

// 配置
const conf = {
    type: 'parameter',
    elemToHtml: parameterToHtml,
}

export default conf