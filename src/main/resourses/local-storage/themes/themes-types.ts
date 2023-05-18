export const AllThemes = ['system', 'light', 'dark'] as const;

export type Theme = Exclude<(typeof AllThemes)[number], 'system'>;
