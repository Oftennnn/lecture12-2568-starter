import { NavLink as RouterNavLink } from "react-router-dom";
import { NavLink, Stack, Box,Avatar,Indicator,Group } from "@mantine/core";
export default function Sidebar() {
  return (
    <Stack
      align="stretch"
      justify="space-between"
      gap="md"
      style={{ height: "100%" }}
    >
      {/* Menu / เมนู*/}
      <Box>
        <NavLink color="Kamin" label="Home" component={RouterNavLink} to="/" active />
        <NavLink label="About" component={RouterNavLink} to="/about" />
      </Box>
      {/* แสดงผู้ใช้งาน */}
      <Box p={10}>  
       <Group>
        <Indicator inline size={12} offset={7} color="green" position="bottom-end" withBorder>
           <Avatar src="myPic.JPEG" size="md" radius="xl" />
        </Indicator>
        <text>User : Kamin</text>
       </Group>
      </Box>
    </Stack>
  );
}