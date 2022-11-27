import { Stack } from "@mui/material";
import React from "react";
import GeneralApp from "../../dashboard/GeneralApp";
import SideNav from "./SideNav";

const DashboardLayout = () => {

  return (
    <>
      <Stack direction="row">
          <SideNav/>          
      </Stack>
      </>
  );
};

export default DashboardLayout;