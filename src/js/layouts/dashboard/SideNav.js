import React, { useState } from 'react';
import { Avatar, Box, Divider, IconButton, Stack, Menu, MenuItem } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { Nav_Buttons, Profile_Menu } from '../../data';
import { useSelector } from 'react-redux';
import MaterialUISwitch from '../../components/MaterialUISwitch';

import {
  RiSettings2Fill
} from "react-icons/ri";
import GeneralApp from '../../dashboard/GeneralApp';
import useSettings from '../../hooks/useSettings'
import Logo from '../../../../public/blue.png'



const SideBar = () => {

  const user = useSelector(({ auth }) => auth.user)
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //  For Menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
                <img src={Logo} alt="chat logo" />
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
              <Avatar id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                src={user.avatar} />
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button'
                }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "bottom",
                  horizontal: "left"
                }}
              >
                <Stack
                  spacing={1}
                  px={1}
                >
                  {Profile_Menu.map((el) => (
                    <MenuItem onClick={handleClick}>
                      <Stack sx={{ width: 100 }}
                        direction="row"
                        alignItems={"center"}
                        justifyContent="space-between">
                        <span>
                          {el.title}

                        </span>
                        {el.icon}
                      </Stack >{" "}
                    </MenuItem>
                  ))}
                </Stack>
              </Menu>
            </Stack>
          </Stack>
        </Box>
        <GeneralApp />
      </Stack>
    </>
  )
}
export default SideBar;