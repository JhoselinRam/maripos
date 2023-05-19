import { Theme } from '../main/resourses/local-storage/themes/themes-types';

export interface PreloadApi {
  theme: {
    initialTheme: () => Promise<Theme>;
    update: (callback: UpdateThemeCallback) => void;
  };
}

export type UpdateThemeCallback = (event: Electron.IpcRendererEvent, theme: Theme) => void;
