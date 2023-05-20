import { LocalStore } from '../local-theme-types';
import Store from 'electron-store';
import { Language, StoreLanguage } from './languaje-types';
import { BrowserWindow } from 'electron';

function storeLanguage(store: Store<LocalStore>, window: BrowserWindow): StoreLanguage {
  //--------------- Language Used -------------------
  function languageUsed(): Language {}
  //-------------------------------------------------
  return {};
}
