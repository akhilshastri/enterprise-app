import { Container, Text, Footer, Center } from "@mantine/core";
import { IconCopyright } from "@tabler/icons-react";

export function LayoutFooter() {
  return (
    <Footer height={20}>
      <Container size="xl">
        <Center>
          <IconCopyright size={12} stroke={1.5} />{" "}
          <Text size={"sm"} sx={{ fontSize: 9 }} color="dimmed">
            2022-2023 www.my-company.com
          </Text>
        </Center>
      </Container>
    </Footer>
  );
}
