import { Language } from '@renderer/language/language-types';
import { useEffect, useState } from 'react';
import { UseLanguage } from './use-language-types';

export function useLanguage(): UseLanguage {
  //language state
  const [lang, setLang] = useState<Language>('en');

  //-------------------------------------------------
  //-------------------------------------------------

  //Get the language to be used at the start from the backend
  async function initialLanguage(): Promise<void> {
    const backendLang = await window.api.language.initialLanguage();
    setLang(backendLang);
  }

  //-------------------------------------------------
  //-------------------------------------------------

  //On startup
  useEffect(() => {
    initialLanguage();
    window.api.language.update((_event, backendLang) => setLang(backendLang));
  }, []);

  //-------------------------------------------------
  //-------------------------------------------------

  return {
    language: lang
  };
}

export default useLanguage;
