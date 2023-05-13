import { useMantineTheme } from "@mantine/core";

export const useIsDarkTheme = () => {
  const theme = useMantineTheme();
  return theme.colorScheme === "dark";
};
