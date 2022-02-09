import Layout from "../components/layout"
import ProgressTopBar from "../components/progress";
import {Stack} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";

export default function Quiz() {
    return (
       <>
           <br/>
           <br/>
       <ProgressTopBar/>
       <br/>
           <Stack  direction="row"
                   justifyContent="space-between"
                   alignItems="center" spacing={2}>
               <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
               <a>Quiz Name</a>
               <MoreHorizIcon/>
           </Stack>
       </>
    )
}