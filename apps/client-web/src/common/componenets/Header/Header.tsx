import {
  Container,
  Center,
  Header,
  MediaQuery,
  Burger,
  useMantineTheme,
  Group,
  Code,
  Space,
  Indicator,
} from "@mantine/core";
import { MantineLogo, ColorSchemeControl, HeaderControl } from "@mantine/ds";
import useStyles, { HEADER_HEIGHT } from "./Header.styles";
import { MouseEventHandler, useState } from "react";
import { IconBell, IconSettings, IconUser } from "@tabler/icons-react";

interface LayoutHeaderProps {
  opened: boolean;
  onOpenClick?: MouseEventHandler<HTMLElement>;
}

export function LayoutHeader({ opened, onOpenClick }: LayoutHeaderProps) {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <Header height={HEADER_HEIGHT}>
      <div className={classes.header}>
        <Container size="xl" px="md" className={classes.inner}>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <Burger
              opened={opened}
              onClick={onOpenClick}
              size="sm"
              color={theme.colors.gray[6]}
              mr="xl"
            />
          </MediaQuery>
          <div>
            <Center component="a" sx={(theme) => theme.fn.focusStyles()}>
              <MantineLogo variant="ui.mantine.dev" size={30} />
              <Group position="apart" p={"md"}>
                <Code sx={{ fontWeight: 500, fontSize: 8 }}>v2022.10.1</Code>
              </Group>
            </Center>
          </div>
          <Center>
            <Group
              spacing={0}
              className={classes.social}
              position="right"
              noWrap
            >
              <HeaderControl tooltip="Notification">
                <Indicator color="red" position="bottom-start">
                  <IconBell size={22} stroke={1.5} />
                </Indicator>
              </HeaderControl>
              <HeaderControl tooltip="User">
                <IconUser size={22} stroke={1.5} />
              </HeaderControl>
              <HeaderControl tooltip="Setting">
                <IconSettings size={22} stroke={1.5} />
              </HeaderControl>
              <Space w="lg" />
            </Group>

            <Group>
              <ColorSchemeControl />
            </Group>
          </Center>
        </Container>
      </div>
    </Header>
  );
}
