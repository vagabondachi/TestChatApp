
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchChats } from '../actions/chats';
// import Notification from '../utils/notifications';


// import { 
//   HashRouter as Router, 
//   Route, 
// } from "react-router-dom";


// import { 
//   RiNavigationFill,
//   RiGamepadFill,
//   RiCheckboxBlankCircleFill,

//  } from "react-icons/ri"

// import { NavLink } from 'react-router-dom';


// Pages to render to the div container
// import DirectMsg from '../components/DirectMsg';
// import TeamMsg from '../components/TeamMsg';
// import Dashboard from '../components/Dashboard';


import React, {useState} from 'react';
import { Avatar, Box, Divider, IconButton, Stack, Switch } from "@mui/material";
import { useTheme,styled } from '@mui/material/styles';
import { Nav_Buttons } from '../../data';
import { useSelector } from 'react-redux';

import { 
  RiSettings2Fill
 } from "react-icons/ri";
import GeneralApp from '../../dashboard/GeneralApp';
import useSettings from '../../hooks/useSettings'


 const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 52,
  height: 35,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 8,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(20px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 20,
    height: 20,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));




 const DashboardLayout = () => {
//   const[isOpen ,setIsOpen] = useState(false);
//   const toggle = () => setIsOpen (!isOpen);
//   const menuItem=[
//     {
//       path: "/",
//       name: "Dashboard",
//       icon: <RiNavigationFill/>
//     },
//     {
//       path: "/home/direct",
//       name: "Direct Message",
//       icon: <RiNavigationFill/>
//     },
//     {
//       path: "/home/team",
//       name: "Team Message",
//       icon: <RiGamepadFill/>
//     },
//   ]
//   return (

//     <div className='page'>
//       <div style={{width: isOpen ? "15%" : "5%"}}className='sidemenu'>
//         <div className='top_section'>
//           <h1 style={{display: isOpen ? "block" : "none"}} className='logo'> Weedle </h1>
//             <div style={{marginLeft: isOpen ? "5%" : "0%"}} className='bars'> 
//             <img src='C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png'onClick={toggle}/> 
//             </div>
//         </div> 
//       {
//         menuItem.map((item, index)=>(
//           <NavLink to={item.path} key={index} className="link" activeClassName="active">
//             <div className='icon'>{item.icon}</div>
//             <div style={{display: isOpen ? "block" : "none"}} className='link_text'>{item.name}</div>
//           </NavLink>
//         ))
//       }
//        </div>
     
//       <Contents/>
  

//       </div>
  
//   )
// }

// function Contents(){
//   const dispatch = useDispatch();
//   const joinedChats = useSelector(({chats}) => chats.joined)


//   useEffect(() => {
//     Notification.setup();
//     dispatch(fetchChats())
//   }, [dispatch])

//   return(
 
//       <Router>
//         <Route path="/">
//             <Dashboard/>
//           </Route >
//           <Route  path="/home/direct">
//             <DirectMsg/>
//           </Route >
//           <Route  path="/home/team">
//             <TeamMsg chats={joinedChats} />
//             </Route >
//         </Router>
   
    
//   )
const user = useSelector(({auth}) => auth.user)
const theme = useTheme();
const [selected,setSelected] = useState(0);
console.log(theme);
const {onToggleMode} = useSettings();

return(
  <>
  <Stack direction = "row">
  <Box p={2}
    sx ={{
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
      height: "100vh",
      width:100
    
    }}>


      {/* Stack for logo,icon,avatar */}
      <Stack 
        sx={{
        height: '90vh'}}
        direction="column"
        alignItems="center" 
        justifyContent="space-between"
        spacing= {3}

      >
        {/* Stack for logo and icons only */}

        <Stack alignItems={"center"} spacing={4}>

        {/* background container for Logo */}
        <Box p={2} sx={{
          backgroundColor: theme.palette.primary.main,
          height: 64,
          width: 64,
          borderRadius: 1.5,
          }}
          >
         {/* Logo */}
            <img src='C:/Users/pearl/OneDrive/Desktop/Weedle/assets/images/smallweedle.png' alt="chat logo"/>
            </Box>

          {/* Stack for icons   */}
            <Stack 
              sx={{width: "max-content"}}   
              direction="column"
              alignItems="center"         
              spacing= {3}
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
                    sx={{width: "max-content", color: "#fff"}}
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
                  {{width: "max-content",
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
                    sx={{backgroundColor: theme.palette.primary.main, 
                    borderRadius: 1.5
                  }}
                    >
                        <IconButton
                          sx={{width: "max-content", color: "#fff"}}>
                    <RiSettings2Fill/>
                  </IconButton>   
                  </Box>
                   ) : ( 
                   
                   <IconButton onClick={() => {
                    setSelected(3);
                  }}
                  sx={{width: "max-content",
                  color: "#000"}}
                  >
                  <RiSettings2Fill/>
                </IconButton>   
                )}   

        </Stack>
            </Stack>

            
         <Stack spacing={4}>
          <MaterialUISwitch onChange={()=> {
            onToggleMode();

          }}
              defaultChecked />
            <Avatar src={user.avatar}/>
            </Stack>
       </Stack>
    </Box>
    <GeneralApp/>
    </Stack>
    </>
)
}
export default DashboardLayout;