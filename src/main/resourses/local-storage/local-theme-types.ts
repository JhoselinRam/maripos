import { Language } from './language/languaje';
import { Theme } from './themes/themes-types';

export interface LocalStore {
  lang: Language;
  theme: Theme;
}
