import { createStyles } from "@mantine/styles";

export const HEADER_HEIGHT = 50;

export default createStyles((theme) => ({
  header: {
    position: "fixed",
    zIndex: 1000,
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "100%",
  },

  social: {
    width: 260,
    [theme.fn.smallerThan("sm")]: {
      width: "auto",
      marginLeft: "auto",
    },
  },
}));
