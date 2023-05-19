export const AllLanguages = ['system', 'es', 'en'] as const;

export type Language = Exclude<(typeof AllLanguages)[number], 'system'>;
