import {
  Burger,
  Title,
  useMantineColorScheme,
  Group,
  ActionIcon,
} from "@mantine/core";
import { IconMoon } from "@tabler/icons-react";

interface HeaderProps {
  opened: boolean;
  toggle: () => void;
}

export default function Header({ opened, toggle }: HeaderProps) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDark = colorScheme === "dark";
  return (
    <Group p="md" justify="space-between">
      <Group>
        <Burger
          size="sm"
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
        />
        <Title order={3}>🚀 My App Header</Title>
      </Group>
      {/*เปลี่ยน theming */}
      <Group gap={5}>
        <ActionIcon
          variant="filled"
          color="green"
          aria-label="Settings"
          onClick={toggleColorScheme}
        >
          <IconMoon size={20} />
        </ActionIcon>
      </Group>
    </Group>
  );
}
