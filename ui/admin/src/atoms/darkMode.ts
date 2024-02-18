import { atomWithStorage } from 'jotai/utils';

const e = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
export const darkModeAtom = atomWithStorage<boolean>('darkMode', e);
