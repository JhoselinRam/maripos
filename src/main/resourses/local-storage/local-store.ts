const { Store } = require('electron-store');
const { AllThemes } = require('./themes/themes-types');

//------------------ Schema -----------------------

const schema = {
  //Aplication lenguaje
  lang: {
    type: 'string',
    default: 'system'
  },
  //Aplication theme
  theme: {
    type: 'string',
    default: 'system',
    enum: AllThemes
  }
};

//------------------- Store -----------------------

const store = new Store({
  schema,
  encryptionKey: import.meta.env.MAIN_VITE_STORE_KEY
});

//-------------------------------------------------

export default store;
