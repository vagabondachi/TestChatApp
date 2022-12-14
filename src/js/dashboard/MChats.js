import { Box, IconButton, Stack, Typography, InputBase, Button, Divider, Avatar, Badge } from "@mui/material";
import React from 'react';
import { useSelector } from 'react-redux';
import {
  RiChatHistoryFill,
  RiSearchLine,
  RiArchiveFill,
  RiAddFill
} from "react-icons/ri";

import { styled, alpha } from '@mui/material/styles';
import { ChatList } from "../data";
import { SimpleBarStyle } from "../components/settings/Scrollbar";
import "simplebar/src/simplebar.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 20,
  backgroundColor: alpha(theme.palette.background.paper, 1),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%"
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  position: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  paddingLeft: `calc(1em + ${theme.spacing(0.5)})`,
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    //vertical padding * fint size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%"
  }

}));








const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
  const user = useSelector(({ auth }) => auth.user)
  return (
    <Box sx={{
      width: "100%",

      borderRadius: 1,
      backgroundColor: "#fff",

    }}

      p={2}
    >
      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent="space-between">

        <Stack
          direction="row"
          spacing={2} >
          {online ? <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot">

            <Avatar src={img} />
          </StyledBadge> : <Avatar src={img} />}

          <Stack spacing={0.3}>
            <Typography variant="subtitle2">
              {name}
            </Typography>
            <Typography variant="caption">
              {msg}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          spacing={2}
          alignItems="center">
          <Typography sx={{ fontWeight: 600 }} variant="caption">
            {time}
          </Typography>
          <Badge color="primary" badgeContent={unread}></Badge>

        </Stack>
      </Stack>
    </Box>
  )
}



const MChats = () => {
  return (
    <Box sx={{
      position: "relative",
      width: 320,
      backgroundColor: "#F8FAFF",
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
    }}
    >
      <Stack p={3} spacing={2} sx={{ height: "100vh" }}>



        {/* Search bar */}
        <Stack sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <RiSearchLine color="#0709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search..." inputProps={{ "aria-label": "search" }} />
          </Search>

        </Stack>



        <Stack
          spacing={1}
        >
          <Stack
            direction="row"
            alignItems={"center"}
            spacing={1.5}
            sx={{ color: "#34485E" }}>

              <Stack direction="row"
            spacing={2}>
            <Typography>   Direct Messages  
            </Typography>
            </Stack>
            
            <Stack
             spacing={2}
              direction="row"
              alignItems={"center"} >
              <IconButton>
                <RiAddFill color="#0709CE6" />
              </IconButton>

            </Stack>
          </Stack>
          <Divider />
        </Stack>


        <Stack
          spacing={2}
          direction="column"
          sx={{ flexGrow: 1, overflowY: "scroll", height: "100%" }}>


          {/* Scrollbar*/}
          <SimpleBarStyle timeout={500} clickOnTrack={false}>

            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                Pinned
              </Typography>
              {ChatList.filter((el) => el.pinned).map((el) => {
                return <ChatElement {...el} />
              })}
            </Stack>


            <Stack spacing={2.4}>
              <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                All Direct Messages
              </Typography>
              {ChatList.filter((el) => !el.pinned).map((el) => {
                return <ChatElement {...el} />
              })}
            </Stack>

          </SimpleBarStyle>


        </Stack>
      </Stack>

    </Box>

  )
}

export default MChats;
