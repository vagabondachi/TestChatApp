import { Stack, Box } from '@mui/material';
import React from 'react'
import Conversation from '../components/Conversation';
import MChats from './MChats';
import {useTheme} from '@mui/material/styles';

const GeneralApp = () => {
  const theme = useTheme();
  return (
<Stack direction={"row"} sx={{width: "100%"}}>

{/* Chats*/}
  <MChats/>
  <Box 
  sx={{
    height: "100%",
    width: "calc(100vw - 420px)",
    backgroundColor: 
    theme.palette.mode === "light" 
    ? "#F0F4FA" 
    : theme.palette.background.default}}>

{/* Conversation */}
<Conversation/>
  </Box>
</Stack> 
  )
}
export default GeneralApp;
