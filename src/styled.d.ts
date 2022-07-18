import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    bgDarkColor: string;
    fontColor: string;
    headerColor: string;
    accent?: string;
    borderColor?: string;
  }
}
