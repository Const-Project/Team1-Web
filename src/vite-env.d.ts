/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_KAKAO_MAP: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
