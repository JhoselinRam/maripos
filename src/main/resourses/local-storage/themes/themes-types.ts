export const ThemeValues = ['system', 'light', 'dark'] as const;

export const AllThemes = ThemeValues.slice();

export type Theme = Exclude<(typeof ThemeValues)[number], 'system'>;
