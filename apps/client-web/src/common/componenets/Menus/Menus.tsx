import { Box, Highlight, NavLink, useMantineTheme, Text } from "@mantine/core";
import * as Icons from "@tabler/icons-react";
import { useState } from "react";
import { NavLink as RNavLink } from "react-router-dom";

export type MenuItem = {
  id: number;
  sr: number;
  name: string;
  icon: string;
  parent: number;
  url: string;
  children: MenuItem[];
};

export interface MenusProps {
  data: MenuItem[];
  filter: string;
}

type RenderToplevelProps = {
  menus: MenuItem[];
  active: number | undefined;
  setActive: ReturnType<typeof useState<number | undefined>>[1];
  filter: string;
};

const RenderToplevel = ({
  menus,
  active,
  setActive,
  filter,
}: RenderToplevelProps) => {
  return (
    <>
      {menus.map((itm) => {
        // @ts-ignore
        const MenuIcon = Icons[itm.icon] ?? Icons.IconBookmark;
        return (
          <NavLink
            component={RNavLink}
            to={itm.url}
            key={`${itm.id}_${itm.name}`}
            label={<Highlight highlight={filter}>{itm.name}</Highlight>}
            onClick={() => setActive(itm.id)}
            icon={<MenuIcon size={16} stroke={1.5} />}
            {...(itm.id === active ? { active: true } : {})}
            {...(itm.children?.length > 0 ? { childrenOffset: 10 } : {})}
            defaultOpened={true}
            className={`${
              itm.children?.length > 0 || itm.parent === null
                ? "brand-color"
                : ""
            }`}
          >
            {itm.children?.length > 0 && (
              <RenderToplevel
                key={`${itm.id}_${itm.name}`}
                menus={itm.children}
                {...{ active, setActive, filter }}
              />
            )}
          </NavLink>
        );
      })}
    </>
  );
};

export const Menus = ({ data, filter }: MenusProps) => {
  const theme = useMantineTheme();
  const [active, setActive] = useState<number | undefined>();

  const getColor = (color: string) =>
    theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];

  return (
    <Box>
      <RenderToplevel menus={data} {...{ active, setActive, filter }} />
    </Box>
  );
};
