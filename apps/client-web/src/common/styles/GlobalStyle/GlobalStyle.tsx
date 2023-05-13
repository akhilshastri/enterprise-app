import { Global } from "@mantine/core";
import { darkVars, lightVars } from "./flexlayout-vars";

export function GlobalStyle() {
  return (
    <Global
      styles={(theme) => {
        const cssVarOverrides =
          theme.colorScheme === "dark" ? darkVars : lightVars;
        return {
          ".ag-theme-alpine, .ag-theme-alpine-dark": {
            "--ag-font-size": "12px",
            "--ag-grid-size": "4px",
            "--ag-selected-row-background-color":
              theme.colorScheme === "dark" ? "#1a2d3f" : "#e7f5ff",
            "--ag-background-color":
              theme.colorScheme === "dark"
                ? theme.colors.dark[7]
                : theme.colors.white,
            "--ag-odd-row-background-color":
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.white,
          },
          ".ag-status-bar": {
            height: "30px",
          },
          ".ag-status-name-value": {
            fontSize: "12px",
            margin: "-6px 5px 5px 5px",
          },
          "::-webkit-scrollbar": { width: "10px", height: "25px" },
          "::-webkit-scrollbar-track-piece": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[3],
          },
          "::-webkit-scrollbar-thumb": {
            height: "50px",
            backgroundColor: "rgba(102,102,102,0.34)",
            borderRadius: "3px",
          },
          ".flexlayout__layout": {
            ...cssVarOverrides,
            ...(theme.colorScheme === "dark"
              ? {
                  "--color-tab-selected-background": theme.colors.dark[7],
                  "--color-background": theme.colors.dark[7],
                }
              : {}),
            left: "calc(var(--mantine-navbar-width) + 10px)",
            top: "calc(var(--mantine-header-height) + 10px)",
            // right: 0,
            // bottom: 0,
            // position: "absolute",
            // overflow: "hidden",
          },
          ".dashboard .flexlayout__layout": {
            top: 30,
            left: 0,
            right: 0,
            bottom: 20,
            position: "absolute",
            overflow: "hidden",
          },
          ".flexlayout__splitter_drag": {
            borderRadius: "5px",
          },
          ".flexlayout__tabset_header": {
            boxShadow: "inset 0 0 3px 0 rgba(136, 136, 136, 0.54)",
          },
          ".flexlayout__tabset-selected": {
            backgroundImage:
              "linear-gradient(var(--color-background), var(--color-4))",
          },
          ".flexlayout__tabset-maximized": {
            backgroundImage: "linear-gradient(var(--color-6), var(--color-2))",
          },
          ".flexlayout__tab_button_top": {
            boxShadow: "inset -2px 0px 5px rgba(0, 0, 0, 0.1)",
            borderBottomLeftRadius: "3px",
            borderBottomRightRadius: "3px",
          },
          ".flexlayout__tab_button_bottom": {
            boxShadow: "inset -2px 0px 5px rgba(0, 0, 0, 0.1)",
            borderBottomLeftRadius: "3px",
            borderBottomRightRadius: "3px",
          },
          ".flexlayout__tab_button_trailing:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? "var(--color-6)"
                : "var(--color-3)",
          },
          ".brand-color": {
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[9]
                : theme.colors.blue[9],
          },
        };
      }}
    />
  );
}
