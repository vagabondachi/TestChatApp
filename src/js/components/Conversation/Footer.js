import React from 'react';
import { Box, Stack, IconButton, InputAdornment, TextField } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import {
    RiLinksFill,
    RiMic2Fill,
    RiSendPlaneLine,
    RiEmotionHappyLine
} from "react-icons/ri";

const StyledInput = styled(TextField)(({ theme }) => ({
    "& .MuiInputBase-input": {
        paddingTop: "12px",
        paddingBottom: "12px"

    }

}))




const ChatInput = () => {
return(  
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
        endAdornment: (<InputAdornment>{

            <IconButton>
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
                <Stack>
                <Picker
                theme={theme.palette.mode}
                data={data}
                onEmojiSelect={console.log}
              />
                    <ChatInput />
                </Stack>


                <Box sx={{ height: 48, width: 48, backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                    <Stack sx={{ height: "100%", width: "100%" }} alignItems="center" justifyContent="center">
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

