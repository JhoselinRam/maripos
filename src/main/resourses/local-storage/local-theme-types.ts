import { Language } from './language/languaje';
import { StoreThemes, Theme } from './themes/themes-types';
import Store from 'electron-store';

export interface LocalStore {
  lang: Language;
  theme: Theme;
}

export interface LocalStoreObject extends StoreThemes {
  store: Store<LocalStore>;
}
