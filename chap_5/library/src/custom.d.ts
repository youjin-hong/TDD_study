// 타입스크립트 파일에서 scg 파일을 타입스크립트에서 불러올 수 있게 하도록 하는 파일

declare module "*.svg" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
