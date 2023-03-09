import { RefObject } from 'react';

export type ThemeContextType = {
  currentTheme: string;
  changeCurrentTheme: (newTheme: 'light' | 'dark') => void;
};

export type ScrollProps = {
  goToSectionRefArray: RefObject<HTMLDivElement>[];
  scrollTo: (section: RefObject<HTMLDivElement>) => void;
};
