/// <reference types='vite/client'>

interface ImportMetaEnv {
  readonly MAIN_VITE_STORE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
