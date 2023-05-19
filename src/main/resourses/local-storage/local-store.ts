import Store, { Schema } from 'electron-store';
import { AllThemes } from './themes/themes-types';
import { LocalStore } from './local-theme-types';

//------------------ Schema -----------------------

const schema: Schema<LocalStore> = {
  //Aplication lenguaje
  lang: {
    type: 'string',
    default: 'system'
  },
  //Aplication theme
  theme: {
    type: 'string',
    default: 'system',
    enum: AllThemes as string[]
  }
};

//------------------- Store -----------------------

const store = new Store({
  encryptionKey: import.meta.env.MAIN_VITE_STORE_KEY,
  schema
});

//-------------------------------------------------

export default store;
