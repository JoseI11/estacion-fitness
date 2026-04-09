/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_URL?: string;
  readonly VITE_PUBLIC_PHONE?: string;
  readonly VITE_GOOGLE_FORM_URL?: string;
  readonly VITE_INSTAGRAM_URL?: string;
  readonly VITE_TIKTOK_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
