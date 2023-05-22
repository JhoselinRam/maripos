export const LanguageValues = ['system', 'es', 'en'] as const;

export const AllLanguages = LanguageValues.slice();

export type Language = Exclude<(typeof AllLanguages)[number], 'system'>;

export interface StoreLanguage {
  languageUsed: () => Language;
}
