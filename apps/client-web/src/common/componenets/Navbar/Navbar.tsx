import { Code, Group, Navbar, Text, TextInput } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import useStyles from "./Navbar.styles";
import { MenuItem, Menus } from "../Menus/Menus";
import { useGetMenuData } from "./useGetMenuData";
import { useMemo } from "react";
import { nest } from "./utils";
import { useNavBar } from "./useNavBar";

interface LayoutNavbarProps {
  opened: boolean;
}

export const LayoutNavbar = ({ opened }: LayoutNavbarProps) => {
  const { classes } = useStyles();
  const { data } = useGetMenuData();
  const { filter, setFilter } = useNavBar();

  const nestedMenus = useMemo(() => {
    const menuData = data?.result ?? [];

    const searchString = filter.toLowerCase();
    const filtered = filter
      ? menuData.filter(
          (menu: MenuItem) =>
            !Boolean(menu.parent) ||
            menu.name.toLowerCase().indexOf(searchString) > -1
        )
      : menuData;

    return nest(filtered);
  }, [data?.result, filter]);
  return (
    <Navbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!opened}
      width={{ sm: 200, lg: 300 }}
    >
      <Navbar.Section className={classes.section}>
        <TextInput
          placeholder="Search"
          size="xs"
          icon={<IconSearch size={12} stroke={1.5} />}
          rightSectionWidth={70}
          rightSection={<Code className={classes.searchCode}>Ctrl + M</Code>}
          styles={{ rightSection: { pointerEvents: "none" } }}
          mb="sm"
          value={filter}
          onChange={(event) => setFilter(event.currentTarget.value)}
        />
      </Navbar.Section>

      <Navbar.Section grow>
        <Menus data={nestedMenus} filter={filter} />
      </Navbar.Section>
    </Navbar>
  );
};
