"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { allThemes, defaultThemeId } from "@/lib/themes";
import {
  applyTheme,
  resolveTheme,
  serializeThemeCssVariables,
  THEME_STORAGE_KEY,
  THEME_STORAGE_VARS_KEY
} from "@/lib/themes/runtime";

type ThemeContextValue = {
  themeId: string;
  setThemeId: (themeId: string) => void;
};

const ThemeContext = createContext<ThemeContextValue>({
  themeId: defaultThemeId,
  setThemeId: () => undefined,
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeId, setThemeIdState] = useState(defaultThemeId);

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    const resolved = resolveTheme(stored).id;
    setThemeIdState(resolved);
    applyTheme(resolved);
    window.localStorage.setItem(THEME_STORAGE_VARS_KEY, serializeThemeCssVariables(resolved));
  }, []);

  const setThemeId = (nextThemeId: string) => {
    const resolved = resolveTheme(nextThemeId).id;
    setThemeIdState(resolved);
    window.localStorage.setItem(THEME_STORAGE_KEY, resolved);
    applyTheme(resolved);
    window.localStorage.setItem(THEME_STORAGE_VARS_KEY, serializeThemeCssVariables(resolved));
  };

  const value = useMemo(
    () => ({
      themeId,
      setThemeId,
    }),
    [themeId],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  return useContext(ThemeContext);
}

export { allThemes };
