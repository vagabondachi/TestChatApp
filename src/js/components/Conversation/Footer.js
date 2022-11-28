import React, { useState } from 'react';
import { Box, Stack, IconButton, InputAdornment, TextField, Fab, Tooltip } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import {
    RiLinksFill,
    RiMic2Fill,
    RiSendPlaneLine,
    RiEmotionHappyLine,
    RiFile3Line,
    RiCameraLine,
    RiStickyNoteLine,
    RiImageLine,
    RiContactsLine
} from "react-icons/ri";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"

    }

}))


const Actions = [
    {
        color: "#4da5fe",
        icon: <RiImageLine size={24} />,
        y: 102,
        title: "Photo/Video",
    },
    {
        color: "#1b8cfe",
        icon: <RiStickyNoteLine size={24} />,
        y: 172,
        title: "Stickers",
    },
    {
        color: "#0172e4",
        icon: <RiCameraLine size={24} />,
        y: 242,
        title: "Image",
    },
    {
        color: "#0159b2",
        icon: <RiFile3Line size={24} />,
        y: 312,
        title: "Document",
    },
    {
        color: "#013f7f",
        icon: <RiContactsLine size={24} />,
        y: 382,
        title: "Contact",
    },
];



const ChatInput = ({ setOpenPicker }) => {
    const [openActions, setOpenActions] = useState(false);
    return (
        <StyledInput
            fullWidth placeholder='Write a message...dont be shy'
            variant='filled'
            InputProps={{
                disableUnderline: true,
                startAdornment: (

                    <Stack sx={{ width: 'max-content' }}>


                        <Stack sx={{ position: "relative", display: openActions ? "inline-block" : "none" }}>
                            {Actions.map((el) => (
                                <Tooltip placement="right" title={el.title}>

                                    <Fab
                                        sx={{
                                            position: "absolute",
                                            top: -el.y,
                                            backgroundColor: el.color
                                        }}>
                                        {el.icon}
                                    </Fab>
                                </Tooltip>
                            ))}
                        </Stack>
                        <InputAdornment>
                            <IconButton onClick={() => { setOpenActions((prev) => !prev) 
                                
                            }}>
                                <RiLinksFill />
                            </IconButton>
                        </InputAdornment>
                    </Stack>


                ),
                endAdornment: (<InputAdornment>{

                    <IconButton onClick={() => { setOpenPicker((prev) => !prev) }}>
                        <RiEmotionHappyLine />
                    </IconButton>
                },
                    {

                        <IconButton>
                            <RiMic2Fill />
                        </IconButton>
                    }
                </InputAdornment>

                ),
            }}
        />
    )
}

const Footer = () => {
    const theme = useTheme();
    const [openPicker, setOpenPicker] = useState(false);
    return (
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

                {/* ChatInput */}
                <Stack sx={{ width: "100%" }}>
                    <Box sx={{
                        display: openPicker ? "inline" : "none",
                        zIndex: 10, position: "fixed",
                        bottom: 81,
                        right: 100
                    }}>
                        <Picker
                            theme={theme.palette.mode}
                            data={data}
                            onEmojiSelect={console.log}
                        />
                    </Box>
                    <ChatInput setOpenPicker={setOpenPicker} />

                </Stack>

                <Box 
                sx={{ 
                    height: 48, 
                    width: 48, 
                    backgroundColor: theme.palette.primary.main, 
                    borderRadius: 1.5 }}>
                    <Stack 
                    sx={{ 
                        height: "100%",
                         width: "100%" 
                         }} 
                         alignItems="center" 
                         justifyContent="center">
                        <IconButton>
                            <RiSendPlaneLine color="#fff" />
                        </IconButton>
                    </Stack>

                </Box>
            </Stack>
        </Box>
    )
}

export default Footer;

