import { atom } from "recoil";

export const isHttpLoadingStateAtom = atom<boolean>({
  key: 'isHttpLoadingStateAtom',
  default: false,
});

export const isLoggedInStateAtom = atom<boolean>({
  key: 'isLoggedInStateAtom',
  default: false,
});
