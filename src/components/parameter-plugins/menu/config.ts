import { ParameterElement, ParameterOptions } from "../typing"

export type ParameterConfig =  {
    options: ParameterOptions,
    onInserted: (elem: ParameterElement) => void
}