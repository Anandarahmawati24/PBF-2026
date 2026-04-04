declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}