declare module '*?raw' {
  const content: string;
  export default content;
}

declare module '*.hbs' {
  const content: string;
  export default content;
}

declare module "uuid/v4" {
  export { v4 as default } from "@types/uuid";
}
