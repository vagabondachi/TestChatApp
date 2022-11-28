import React from 'react'
import { Box, Divider, Stack, Typography, Link, IconButton } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import {
    RiImage2Line,
    RiDownloadLine
  } from "react-icons/ri";



const DocMsg = ({el}) => {
    const theme = useTheme();
  return (
    <Stack
    direction="row"
    justifyContent={el.incoming
        ? "start" : "end"}>

    <Box
        p={1.5}
        sx={{
            backgroundColor: el.incoming
                ? theme.palette.background.default
                : theme.palette.primary.main,
            borderRadius: 1.5,
            width: "max-content"
        }}>

            <Stack spacing={2}>
                <Stack 
                p={2}
                spacing={3}
                alignItems="center"
                direction="row" 
                sx={{
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 1
                }}>
                  <RiImage2Line size={48}/>
                  <Typography variant="caption"> Abstract.png</Typography>
            <IconButton>
                <RiDownloadLine/>
                </IconButton>
            </Stack>
            <Typography 
            variant="body2"
            sx={{color: el.incoming ? theme.palette.text : "#fff"}}>{el.message}</Typography>
            </Stack>
            </Box>
            </Stack>
  )
}




const LinkMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            justifyContent={el.incoming
                ? "start" : "end"}>

            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}>

                <Stack spacing={2}>
                    <Stack
                        p={2}
                        direction="column"
                        spacing={3}
                        alignItems="start"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1,
                        }}
                    >
                        <img
                            src={el.preview}
                            alt={el.message}
                            style={{ maxHeight: 210, borderRadius: "10px" }}
                        />
                        <Stack
                            spacing={2}>
                            <Typography
                                variant="subtitle2">
                                Creating Chat App
                            </Typography>
                            <Typography
                                variant="subtitle2" component={Link}>
                                www.youtube.com
                            </Typography>
                        </Stack>
                        <Typography
                            variant="body2"
                            color={el.incoming
                                ? theme.palette.text : "#fff"}>
                            {el.message}
                        </Typography>
                    </Stack>
                </Stack>
            </Box>
        </Stack>
    )
}

const ReplyMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            justifyContent={el.incoming
                ? "start" : "end"}>

            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-conent"
                }}>
                <Stack spacing={2}>
                    <Stack
                        p={2}
                        direction="column"
                        spacing={3}
                        alignItems="center"
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: 1
                        }}>
                        <Typography variant="body2" color={theme.palette.text}>
                            {el.message}
                        </Typography >

                    </Stack>
                    <Typography
                        variant="body2"
                        color={el.incoming
                            ? theme.palette.text : "#fff"}>
                        {el.reply}
                    </Typography>
                </Stack>
            </Box>
        </Stack>
    )
}



const MediaMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            justifyContent={el.incoming
                ? "start" : "end"}>

            <Box
                p={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-conent"
                }}>

                <Stack spacing={1}>
                    <img
                        src={el.img}
                        alt={el.message}
                        style={{
                            maxHeight: 210,
                            borderRadius: "10px"
                        }} />

                    <Typography
                        variant="body2"
                        color={el.incoming
                            ? theme.palette.text : "#fff"}>
                        {el.message}

                    </Typography>


                </Stack>
            </Box>
        </Stack>
    )
}


const TextMsg = ({ el }) => {
    const theme = useTheme();
    return (
        <Stack
            direction="row"
            justifyContent={el.incoming
                ? "start" : "end"}>
            <Box p
                ={1.5}
                sx={{
                    backgroundColor: el.incoming
                        ? theme.palette.background.default
                        : theme.palette.primary.main,
                    borderRadius: 1.5,
                    width: "max-content"
                }}
            >
                <Typography variant="body2" color={el.incoming ? theme.palette.text : "#fff"}>
                    {el.message}
                </Typography>
            </Box>



        </Stack>
    )

}

const Timeline = ({ el }) => {
    const theme = useTheme();
    return <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between">
        <Divider width="46%" />
        <Typography variant="caption" sx={{ color: theme.palette.text }}>{el.text}</Typography>
        <Divider width="46%" />
    </Stack>



}

export { Timeline, TextMsg, MediaMsg, ReplyMsg, LinkMsg, DocMsg };