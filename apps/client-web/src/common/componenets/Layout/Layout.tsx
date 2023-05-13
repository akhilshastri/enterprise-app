import { UiComponent } from "../../../types";
import {
  AppShell,
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from "@mantine/core";
import { useState } from "react";
import { useHotkeys, useLocalStorage } from "@mantine/hooks";
import { themeOverrides } from "../../theme/overrides";
import { GlobalStyle } from "../../styles/GlobalStyle/GlobalStyle";
import { LayoutNavbar } from "../Navbar/Navbar";
import { LayoutFooter } from "../Footer/Footer";
import { LayoutHeader } from "../Header/Header";

interface LayoutProps {
  children: React.ReactNode;
  noHeader?: boolean;
  data?: UiComponent[];
}

const THEME_KEY = "dashboard-color-scheme";
const emotionCache = createEmotionCache({ key: "dashboard-app" });

export function Layout({ children, noHeader = false, data }: LayoutProps) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: THEME_KEY,
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider
      emotionCache={emotionCache}
      theme={{ ...themeOverrides, ...{ colorScheme } }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <GlobalStyle />

        <AppShell
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}
          navbar={<LayoutNavbar opened={opened} />}
          // aside={
          //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
          //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
          //       <Text>Application sidebar</Text>
          //     </Aside>
          //   </MediaQuery>
          // }
          footer={<LayoutFooter />}
          header={
            <LayoutHeader
              opened={opened}
              onOpenClick={() => setOpened((o) => !o)}
            />
          }
        >
          {children}
        </AppShell>
      </ColorSchemeProvider>
    </MantineProvider>
  );
}
