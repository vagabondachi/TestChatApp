import { Box, Stack} from '@mui/material'
import React from 'react';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';
import Message from './Message';





const Conversation = () => {
    const user = useSelector(({ auth }) => auth.user)
    const theme = useTheme();
    return (
        <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>

            {/* Chat Header */}
           <Header/>
            {/* Msg */}
            <Box
                sx={{ flexGrow: 1,
                height: "100%",
            overflowY:"scroll" }}
                width={"100%"} >

                    <Message/>
            </Box>


            {/* Chat Footer */}
            <Footer/>
           
        </Stack>
    )
}
export default Conversation;
