/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SIMULATE_ERROR?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
