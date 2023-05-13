import {
  MantineProvider,
  ButtonProps,
  SwitchProps,
  MantineTheme,
  ColorScheme,
} from "@mantine/core";

const THEME_KEY = "mantine-color-scheme";

const ButtonDefaultProps: Partial<ButtonProps> = {
  size: "xs",
  color: "cyan",
};

const SwitchDefaultProps: Partial<SwitchProps> = {
  size: "xs",
  onLabel: "ON",
  offLabel: "OFF",
};

export const themeOverrides: Partial<MantineTheme> = {};
