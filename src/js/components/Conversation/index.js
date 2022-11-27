import { Avatar, Box, Stack, Badge, Typography, IconButton, Divider, TextField, InputAdornment } from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { styled, useTheme } from '@mui/material/styles';

import {
    RiSwordFill,
    RiArrowDownSLine,
    RiLinksFill,
    RiMic2Fill,
    RiSendPlaneLine
} from "react-icons/ri";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"

    }

}))



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





const Conversation = () => {
    const user = useSelector(({ auth }) => auth.user)
    const theme = useTheme();
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>

            {/* Chat Header */}
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
            {/* Msg */}

            <Box
                sx={{ flexGrow: 1 }}
                width={"100%"} >
            </Box>


            {/* Chat Footer */}

            <Box
                p={2}
                sx={{
                    width: "100%",
                    backgroundColor: "#F8FAFF",
                    boxShadow: "0px 0px 2px rgba(0,0,0,0.25)"
                }}>
                <Stack
                    direction="row"
                    alignItems={"center"}
                    spacing={3}>
                    <StyledInput fullWidth placeholder='Write a message...dont be shy' variant='filled'
                        InputProps={{
                            disableUnderline: true,
                            startAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <RiLinksFill />
                                    </IconButton>
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment>
                                    <IconButton>
                                        <RiMic2Fill />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                        <Stack sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
                            <IconButton>
                                <RiSendPlaneLine color="#fff" />

                            </IconButton>
                        </Stack>

                    </Box>
                </Stack>
            </Box>
        </Stack>
    )
}
export default Conversation;
