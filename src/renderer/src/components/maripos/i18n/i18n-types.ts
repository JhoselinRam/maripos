import { Language } from '@renderer/language/language-types';

export interface I18N<T> {
  getText: (lang: Language, route: Route<T>) => string;
}

export type Translations<T> = {
  [k in Language]: T;
};

export type UnionFromObject<T> = keyof T;

type RecursiveRoutes<T> = {
  [k in keyof T]: T[k] extends object
    ? `${k & string}.${RecursiveRoutes<T[k]>[keyof RecursiveRoutes<T[k]>] & string}`
    : k;
};

export type Route<T> = RecursiveRoutes<T>[keyof RecursiveRoutes<T>];
