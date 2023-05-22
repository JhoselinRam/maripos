import { LanguageValues, StoreLanguage } from './language/languaje-types';
import { StoreThemes, ThemeValues } from './themes/themes-types';
import Store from 'electron-store';

export interface LocalStore {
  lang: (typeof LanguageValues)[number];
  theme: (typeof ThemeValues)[number];
}

export interface LocalStoreObject extends StoreThemes, StoreLanguage {
  store: Store<LocalStore>;
}
