import React from 'react'
import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { faker } from '@faker-js/faker';

import {
  RiCloseFill
} from "react-icons/ri"



const Contact = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 320,
        height: "100vh"
      }}>
      <Stack sx={{ height: "100vh" }}>

        {/* Header */}
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}>
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction="row"
            alignItems={"center"}
            justifyContent="space-between"
            spacing={3}
          >
            <Typography variant="subtitle2">User Info</Typography>

            <IconButton>
              <RiCloseFill />
            </IconButton>
          </Stack>
        </Box>


        {/* Body */}
        <Stack
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflow: "scroll",
          }}
          p={3}
          spacing={3}
        >
           <Stack alignItems="center" direction="row" spacing={2}>
            <Avatar
              src={faker.image.avatar()}
              alt={faker.name.firstName()}
              sx={{ height: 64, width: 64 }}
            />
            </Stack>
        </Stack>

      </Stack>

    </Box>



  );
};

export default Contact;