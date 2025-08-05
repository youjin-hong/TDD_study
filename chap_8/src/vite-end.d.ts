/// <reference types="vite/client" />
/// <referencetypes="vite-plugin-svgr/client" />

interface ImportMetaEnv {
  readonly VITE_SKIP_PREFLIGHT_CHECK: string;
  readonly VITE_REACT_APP_VERSION: string;
  readonly VITE_ALPHA_PUBLIC_KEY: string;
  readonly VITE_PROD_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
