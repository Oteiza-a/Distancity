import { getStylesVariable } from "../helpers/documentStyles";

const stylesVariables: any = {
  background: "--background",
  backgroundSecondary:   "--background-secondary",
  textPrimary: "--text-primary",
  textSecondary: "--text-secondary",
  primary: "--primary",
  secondary: "--secondary",
  error: "--error",
  disabled: "--disabled",
  defaultShadow: "--default-shadow",
}

Object.keys(stylesVariables).forEach((variableKey) => {
  const variable = stylesVariables[variableKey];
  stylesVariables[variableKey] = getStylesVariable(variable);
})

export default stylesVariables;