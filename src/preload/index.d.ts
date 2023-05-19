import { ElectronAPI } from '@electron-toolkit/preload';
import { PreloadApi } from './index-types';

declare global {
  interface Window {
    electron: ElectronAPI;
    api: PreloadApi;
  }
}
