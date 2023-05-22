/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly MAIN_VITE_STORE_KEY: string;
  readonly MAIN_VITE_DEFAULT_THEME: string;
  readonly MAIN_VITE_DEFAULT_LANGUAGE: string;
  readonly MAIN_VITE_FALLBACK_LANGUAGE: string;
  readonly RENDERER_VITE_FALLBACK_THEME: string;
  readonly RENDERER_VITE_FALLBACK_LANGUAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
