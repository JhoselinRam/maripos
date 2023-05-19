import { Theme } from '../main/resourses/local-storage/themes/themes-types';

export interface PreloadApi {
  theme: {
    handleTheme: (callback: HandleThemeCallback) => void;
  };
}

export type HandleThemeCallback = (
  event: Electron.IpcRendererEvent,
  theme: Theme
) => void;
