import { Language } from '../main/resourses/local-storage/language/languaje-types';
import { Theme } from '../main/resourses/local-storage/themes/themes-types';

export interface PreloadApi {
  theme: {
    initialTheme: () => Promise<Theme>;
    update: (callback: UpdateThemeCallback) => void;
  };
  language: {
    initialLanguage: () => Promise<Language>;
    update: (callback: UpdateLanguageCallback) => void;
  };
}

export type UpdateThemeCallback = (event: Electron.IpcRendererEvent, theme: Theme) => void;
export type UpdateLanguageCallback = (event: Electron.IpcRendererEvent, lang: Language) => void;
