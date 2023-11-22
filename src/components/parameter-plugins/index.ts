import { IModuleConf } from "@wangeditor/editor"
import {
  // parameterDeleteMenuConfig, 
  parameterInsertMenuConfig
} from "./menu"
import withParameter from "./plugin"
import renderElemConf from './render-elem'
import elemToHtmlConf from './elem-to-html'
import parseHtmlConf from './parse-elem-html'

const module: Partial<IModuleConf> = {
  editorPlugin: withParameter,
  renderElems: [renderElemConf],
  elemsToHtml: [elemToHtmlConf],
  parseElemsHtml: [parseHtmlConf],
  menus: [
    parameterInsertMenuConfig,
    //  parameterDeleteMenuConfig
  ],
}

export default module