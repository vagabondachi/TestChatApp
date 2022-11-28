import React from "react";
import { useTheme } from '@mui/material/styles';
import { Stack } from "@mui/material";
import SideNav from "./SideNav";

const DashboardLayout = () => {
 const theme = useTheme();
  return (
    <>
      <Stack direction="row">
          <SideNav/>          
      </Stack>
      </>
  );
};

export default DashboardLayout;