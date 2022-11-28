import React, { useState } from 'react';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme} from '@mui/material/styles';
import { Nav_Buttons } from '../../data';
import { useSelector } from 'react-redux';
import MaterialUISwitch from '../../components/MaterialUISwitch';

import {
  RiSettings2Fill
} from "react-icons/ri";
import GeneralApp from '../../dashboard/GeneralApp';
import useSettings from '../../hooks/useSettings'




const DashboardLayout = () => {

  const user = useSelector(({ auth }) => auth.user)
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <>
      <Stack direction="row">
        <Box p={2}
          sx={{
            backgroundColor: theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            height: "100vh",
            width: 100

          }}>


          {/* Stack for logo,icon,avatar */}
          <Stack
            sx={{
              height: '90vh'
            }}
            direction="column"
            alignItems="center"
            justifyContent="space-between"
            spacing={3}

          >
            {/* Stack for logo and icons only */}

            <Stack 
            alignItems="center" 
            
            spacing={4}>

              {/* background container for Logo */}
              <Box p={1} 
          
              sx={{
                height: 64,
                width: 64,
                borderRadius: 1.5,
              }}
              >
                {/* Logo */}
                <img src='C:\Users\pearl\OneDrive\Desktop\Weedle\public\blue.png' alt="chat logo" />
              </Box>

              {/* Stack for icons   */}
              <Stack
                sx={{ width: "max-content" }}
                direction="column"
                alignItems="center"
                spacing={3}
              >
                {Nav_Buttons.map((el) =>
                  el.index === selected ? (
                    <Box
                      p={1}
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        borderRadius: 1.5
                      }}
                    >
                      <IconButton
                        sx={{ width: "max-content", color: "#fff" }}
                        key={el.index}
                      >
                        {el.icon}
                      </IconButton>
                    </Box>
                  ) : (
                    <IconButton
                      onClick={() => {
                        setSelected(el.index);
                      }}
                      sx=
                      {{
                        width: "max-content",
                        color: "#000"
                      }}
                      key={el.index}
                    >
                      {el.icon}
                    </IconButton>
                  )
                )}

                <Divider sx={{ width: "48px" }} />
                {selected === 3 ? (
                  <Box
                    p={1}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5
                    }}
                  >
                    <IconButton
                      sx={{ width: "max-content", color: "#fff" }}>
                      <RiSettings2Fill />
                    </IconButton>
                  </Box>
                ) : (

                  <IconButton onClick={() => {
                    setSelected(3);
                  }}
                    sx={{
                      width: "max-content",
                      color: "#000"
                    }}
                  >
                    <RiSettings2Fill />
                  </IconButton>
                )}

              </Stack>
            </Stack>


            <Stack spacing={4}>
              <MaterialUISwitch onChange={() => {
                onToggleMode();

              }}
                defaultChecked />
              <Avatar src={user.avatar} />
            </Stack>
          </Stack>
        </Box>
        <GeneralApp />
      </Stack>
    </>
  )
}
export default DashboardLayout;