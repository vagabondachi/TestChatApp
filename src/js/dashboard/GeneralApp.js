import { Stack, Box } from '@mui/material';
import React from 'react'
import Conversation from '../components/Conversation';
import MChats from './MChats';
import {useTheme} from '@mui/material/styles';
import Contact from '../components/settings/Contact';
// import { useSelector } from 'react-redux';

const GeneralApp = () => {
  const theme = useTheme();
  // const {sidebar} = useSelector((store) => store.app);  
  return (
<Stack direction={"row"} sx={{width: "100%"}}>

{/* Chats*/}
  <MChats/>
  <Box 
  sx={{
    height: "100%",
    width: "calc(100vw - 430px)" ,
    backgroundColor: 
    theme.palette.mode === "light" 
    ? "#F0F4FA" 
    : theme.palette.background.default}}>

{/* Conversation */}
<Conversation/>
  </Box>

{/* Contact */}
{/* <Contact/> */}

</Stack> 
  )
}
export default GeneralApp;
