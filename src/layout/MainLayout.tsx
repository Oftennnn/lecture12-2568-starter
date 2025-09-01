import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import '@mantine/core/styles.css';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
export default function MainLayout() {
  const [opened, { toggle }] = useDisclosure();
  return (
    // <div>
    //   <Header />
    //   <Sidebar />
    //   <Outlet />
    //   <Footer />
    // </div>
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
       
      }}
      footer={{ height: 50 }}
    >
      <AppShell.Header>
        <Header opened={opened} toggle={toggle}/>
      </AppShell.Header>
      
      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>
      <AppShell.Footer>
        <Footer year = "2025" fullName="Kamin Inthanon" studentId="670610677"/>
      </AppShell.Footer>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      
    </AppShell>
  );
}
