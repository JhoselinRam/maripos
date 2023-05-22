import { LocalStore } from '../local-theme-types';
import Store from 'electron-store';
import { Language, LanguageValues, StoreLanguage } from './languaje-types';
import { app, BrowserWindow } from 'electron';

function storeLanguage(store: Store<LocalStore>, window: BrowserWindow): StoreLanguage {
  //--------------- Language Used -------------------
  function languageUsed(): Language {
    //If the language is hard defined just use that
    const storeLang = store.get('lang');
    if (storeLang !== 'system') return storeLang;

    //Set of unique system preferred languages in two letter format
    const langList = app.getPreferredSystemLanguages().map((item) => item.split('-')[0]);
    const uniqueLangs = new Set(langList);

    //List of available languages in the aplication
    const availableLangs = LanguageValues.filter((item) => item !== 'system') as string[];
    let language = import.meta.env.MAIN_VITE_FALLBACK_LANGUAGE;

    //Takes the first coincidence of the available languages from within the preferred
    //if no coincidence is found, use the fallback language (en)
    Array.from(uniqueLangs).some((lang) => {
      if (availableLangs.includes(lang)) {
        language = lang;
        return true;
      }
      return false;
    });

    //Return the language to use
    return language;
  }
  //-------------------------------------------------
  return {
    languageUsed
  };
}

export default storeLanguage;
