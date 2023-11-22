import { IDomEditor, SlateDescendant, SlateElement } from '@wangeditor/editor'
import { DOMElement } from './utils/dom'
import { ParameterElement } from './typing'

function parseHtml(
    elem: DOMElement,
    children: SlateDescendant[],
    editor: IDomEditor
): SlateElement {
    const value = elem.getAttribute('data-value') || ''
    const label = elem.getAttribute('data-label') || ''
    return {
        type: 'parameter',
        value,
        label,
        children: [{ text: value }], // void node 必须有一个空白 text
    } as ParameterElement
}

const parseHtmlConf = {
    selector: 'span[data-w-e-type="parameter"]',
    parseElemHtml: parseHtml,
}

export default parseHtmlConf