//This file defines an object that acts as an interface to get the correct text
//it does not contain the actual translations.
//Every component defines its own localized text, so navigate to the corresponding component
//folder to get or modify the available translations.

import { Language } from '@renderer/language/language-types';
import { I18N, Route, Translations } from './i18n-types';

//-------------------------------------------------

function i18n<T extends object>(translations: Translations<T>, defaultLang: Language): I18N<T> {
  if (translations == null) throw new Error('No translations present in parameters');
  if (defaultLang == null) throw new Error('No default language present in parameters');
  if (!(defaultLang in translations))
    throw new Error(
      'Translations does not contain the default language or transtaltions are not an object'
    );

  function getText(lang: Language, route: Route<T>): string {
    const routelist = route.toString().split('.');
    const langUsed = lang in translations ? lang : defaultLang;
    let text: object | string = translations[langUsed];

    routelist.forEach((item) => {
      if (typeof text === 'object' && !(item in text))
        throw new Error(
          'Unreachable route: The route specified is not contained in the translations. Translation not found'
        );

      text = text[item];
    });

    if (typeof text === 'string') return text;
    else
      throw new Error('Value reached is not a string, only routes that end in a string are valid');
  }

  return {
    getText
  };
}

//-------------------------------------------------

export default i18n;
