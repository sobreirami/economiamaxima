import { computed } from "vue";
import { useColorMode, useSessionStorage } from "@vueuse/core";
import { type Theme, themes } from "@/lib/themes";

interface Config {
  theme: Theme["name"];
}

export const RADII = [0, 0.25, 0.5, 0.75, 1];

export function useConfigStore() {
  const colorMode = useColorMode();
  const config = useSessionStorage<Config>("config", {
    theme: "orange",
  });

  const themeClass = computed(() => `theme-${config.value.theme}`);

  const theme = computed(() => config.value.theme);

  function setTheme(themeName: Theme["name"]) {
    config.value.theme = themeName;
  }

  const themePrimary = computed(() => {
    const t = themes.find((t) => t.name === theme.value);
    return `hsl(${
      t?.cssVars[colorMode.value === "dark" ? "dark" : "light"].primary
    })`;
  });

  return { config, theme, setTheme, themeClass, themePrimary };
}
