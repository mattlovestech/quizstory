import Layout from "../components/layout"
import ProgressTopBar from "../components/progress";
import {Stack} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import Image from "next/image";
import {textAlign} from "@mui/system";
import Box from "@mui/material/Box";
import Header from "../components/header";
import Button from "@mui/material/Button";

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
               <a>Insert Quiz Name</a>
               <MoreHorizIcon/>
           </Stack>
           <div  style={{textAlign: "center"}}>
               <img height="200px"
                    style={{marginBottom: "25px"}}
                    alt="hbcu gif text"
                    src={"https://media1.giphy.com/media/rcTvOttwC4wDVn5G1t/giphy.gif?cid=ecf05e47hstgngv6j76gb6gg1c55v3dg9r7pfknsj7pvchoq&rid=giphy.gif&ct=s"}/>
           </div>
           <div>
               <Stack style={{backgroundColor: "white",
                   textAlign: "center",
               borderRadius: "25px"}} spacing={2}>
                   <h3 style={{background: "black", borderRadius: "25px"}}>
                       Insert Question?<br/>
                       ...<br/>
                       ...
                   </h3>
                   <a><Button>Anser....</Button></a>
                   <a>Item 2</a>
                   <a>Item 3</a>
                   <a>Item 4</a>
               </Stack>
           </div>
       </>

    )
}