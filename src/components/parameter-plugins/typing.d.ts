export type ParameterElement = {
    type: 'parameter',
    label: string;
    value: string;
    children: [{ text: string }]
}

export type ParameterOption =  {
    text: string,
    value: any,
    selected?: boolean,
    styleForRenderMenuList?: Record<string, any>
}

export type ParameterOptions = ParameterOption[]