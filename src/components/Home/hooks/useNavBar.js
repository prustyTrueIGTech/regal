"use client";

import { useState, useContext } from "react";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  Sidebar,
  useSidebar, // ✅ Import this
} from "@/components/ui/sidebar";

import { NavBar } from "../constants";
import Link from "next/link";
import { nav_bar } from "@/components/Home/constants";
import { commonContext } from "@/store";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const useNavBar = () => {
  const { dispatch } = useContext(commonContext);
  const { toggleSidebar } = useSidebar(); // ✅ Access sidebar control
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (id) => {
    setOpenDropdowns((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleClose = () => {
    // ✅ Optional Redux dispatch if you're tracking sidebar in store
    dispatch({ type: nav_bar, payload: false });

    // ✅ This actually closes the sidebar
    toggleSidebar();
  };

  return (
   
  );
};

export default useNavBar;
