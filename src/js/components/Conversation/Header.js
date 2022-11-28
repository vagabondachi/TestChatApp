import React from 'react'
import { Avatar, Box, Stack,  Typography, IconButton, Divider, } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';

import {
    RiSwordFill,
    RiArrowDownSLine,
} from "react-icons/ri";
import StyledBadge from '../StyleBadge';


const Header = () => {
    const theme = useTheme();
    const user = useSelector(({ auth }) => auth.user)
  return (
  
<Box
p={2}
sx={{
    width: "100%",
    backgroundColor: "#F8FAFF",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"

}}>


<Stack
    alignItems={"center"}
    direction="row"
    justifyContent={"space-between"}
    sx={{
        width: "100%",
        height: "100%"
    }}>


    <Stack direction={"row"} spacing={2}>
        <Box>
           <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot">
                <Avatar src={user.avatar} />
            </StyledBadge>

        </Box>
        <Stack spacing={0.2}>
            <Typography variant="subtitle2">
                {user.username}
            </Typography>
            <Typography vairant="caption"> Online
            </Typography>
        </Stack>
    </Stack>

    <Stack direction="row" alignItems={"center"} spacing={3}>
        <IconButton>
            <RiSwordFill />

        </IconButton>
        <Divider orientation="vertical" flexItem />
        <IconButton>
            <RiArrowDownSLine />
        </IconButton>


    </Stack>
</Stack>
</Box>
  )
}

export default Header