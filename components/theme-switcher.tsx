"use client";

import { useId } from "react";
import { allThemes, useTheme } from "@/components/theme-provider";

type ThemeSwitcherProps = {
  className?: string;
};

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
  const selectId = useId();
  const { themeId, setThemeId } = useTheme();
  const groupedThemes = allThemes.reduce<Record<string, typeof allThemes>>((acc, theme) => {
    if (!acc[theme.category]) {
      acc[theme.category] = [];
    }
    acc[theme.category].push(theme);
    return acc;
  }, {});

  return (
    <div className={className}>
      <label htmlFor={selectId} className="sr-only">
        Theme
      </label>
      <select
        id={selectId}
        value={themeId}
        onChange={(event) => setThemeId(event.target.value)}
        className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-1.5 text-xs text-slate-100 outline-none transition focus:border-orange-400 md:max-w-[220px]"
      >
        {Object.entries(groupedThemes).map(([category, themes]) => (
          <optgroup key={category} label={category}>
            {themes.map((theme) => (
              <option key={theme.id} value={theme.id}>
                {theme.name}
              </option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}
