import { Theme } from '../main/resourses/local-storage/themes/themes-types';

export interface PreloadApi {
  theme: {
    initialTheme: () => Promise<Theme>;
  };
}

export type HandleThemeCallback = (
  event: Electron.IpcRendererEvent,
  theme: Theme
) => void;
