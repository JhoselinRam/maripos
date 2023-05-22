//This file defines an object that acts as an interface to get the correct text
//it does not contain the actual translations.
//Every component defines its own localized text, so navigate to the corresponding component
//folder to get or modify the available translations.

import { Language } from '@renderer/language/language-types';
import { I18N, Route, Translations } from './i18n-types';

//-------------------------------------------------

function i18n<T extends object>(translations: Translations<T>): I18N<T> {
  function getText(lang: Language, route: Route<T>): string {
    const routelist = route.toString().split('.');
    let text: object | string = translations[lang];

    routelist.forEach((item) => {
      text = text[item];
    });

    return typeof text === 'string' ? text : 'not found';
  }

  return {
    getText
  };
}

//-------------------------------------------------
//---------------- Get Routes ---------------------

//Flattens the 'candidate' object returning a new object with a single level containign all the routes of the
//original object as keys. This is usefull to infer a suitable type for the 'get' method of i18n
export function getRoutes(candidate: Record<string, unknown>): Record<string, number> {
  const routes: Record<string, number> = {};

  function recursiveExtract(slice: Record<string, unknown>, prefix: string): void {
    const keys = Object.keys(slice);

    keys.forEach((key) => {
      const value = slice[key];
      if (typeof value === 'object')
        recursiveExtract(value as Record<string, unknown>, `${prefix}.${key}`);
      else {
        let route = `${prefix}.${key}`;
        if (route.startsWith('.')) route = route.slice(1);
        routes[route] = 0;
      }
    });
  }

  recursiveExtract(candidate, '');

  return routes;
}

//-------------------------------------------------
//-------------------------------------------------

export default i18n;
