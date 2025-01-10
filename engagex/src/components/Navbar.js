"use client";
import * as React from "react";
import Image from "next/image";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import hamburger from "../../public/Hamburger.png";
import logo from "../../public/engagex-logo.png";
import Link from "next/link";
import { SquareX } from "lucide-react";

export default function Navbar({ isNavbarScrolled }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => {
    setDrawerOpen(newOpen);
  };

  const DrawerList = (
    <Box
      sx={{
        width: 350,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        paddingX: 2,
      }}
      role="presentation"
      onClick={() => toggleDrawer(false)}
    >
      <List>
        <Link href="/" passHref>
          <ListItem disablePadding className="hover:text-sky-500 ">
            <ListItemButton>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
        </Link>
        <Link href="/" passHref>
          <ListItem disablePadding className="hover:text-sky-500">
            <ListItemButton>
              <ListItemText primary="Global" />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 right-0 flex justify-between items-center px-3 lg:px-6 py-3 z-10 transition-all duration-700 ${
          isNavbarScrolled ? "bg-black bg-opacity-75" : "bg-transparent"
        }`}
      >
        <Image src={logo} alt="EngageX" className="lg:w-[200px] w-[120px]" />
        <div className="flex space-x-6">
          <button className="px-6 py-2 bg-white text-black text-sm font-medium border border-white rounded-full shadow-md hover:shadow-lg focus:shadow-xl transition-shadow">
            Launch App
          </button>
          <button
            onClick={() => toggleDrawer(true)}
            className="px-3 lg:px-6 py-2 bg-white text-black text-sm font-medium border border-white rounded-full flex items-center space-x-0 lg:space-x-2 transition"
          >
            <span className="hidden lg:block">Menu</span>
            <Image src={hamburger} alt="hamburger" className="w-[20px]" />
          </button>
        </div>
      </div>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => toggleDrawer(false)}
      >
        <div className="p-2 m-3 bg-white text-black text-sm font-medium self-end rounded-full transition cursor-pointer">
          <SquareX
            onClick={() => toggleDrawer(false)}
            className="text-sky-500"
            size={30}
          />
        </div>
        {DrawerList}
      </Drawer>
    </>
  );
}
