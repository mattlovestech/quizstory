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
               <h3>Insert Quiz Name</h3>
               <MoreHorizIcon/>
           </Stack>
           <br/>
           <div  style={{textAlign: "center"}}>
               <img height="200px"

                    alt="hbcu gif text"
                    src={"https://media1.giphy.com/media/rcTvOttwC4wDVn5G1t/giphy.gif?cid=ecf05e47hstgngv6j76gb6gg1c55v3dg9r7pfknsj7pvchoq&rid=giphy.gif&ct=s"}/>
           </div>
           <br/>
           <div style={{marginLeft: "10%", marginRight: "10%"}}>
           <Box style={{color: "white", padding: "10px",textAlign: "center", background: "black", borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>
               <h3>Insert Question...
               </h3>
           </Box>
           <Box style={{textAlign: "center", background: "white", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>
               <br/>
               <Button color={"primary"} variant={"contained"} style={{marginBottom: "15px", width: "75%", justifyContent: "flex-start", borderRadius: "25px"}}>
                   <Avatar sx={{ width: 24, height: 24, marginRight: "15px"}} alt="A" src="/static/images/avatar/1.jpg" />
                   <a>Answer...</a>
               </Button>
               <Button color={"success"} variant={"contained"} style={{marginBottom: "15px", width: "75%", justifyContent: "flex-start" , borderRadius: "25px"}}>
                   <Avatar sx={{ width: 24, height: 24, marginRight: "15px"}} alt="B" src="/static/images/avatar/1.jpg" />
                   <a>Answer...</a>
               </Button>
               <Button color={"error"} variant={"contained"} style={{marginBottom: "15px", width: "75%", justifyContent: "flex-start", borderRadius: "25px"}}>
                       <Avatar sx={{ width: 24, height: 24, marginRight: "15px"}} alt="C" src="/static/images/avatar/1.jpg" />
                       <a>Answer...</a>
               </Button>
               <Button color={"primary"} variant={"contained"} style={{marginBottom: "15px", width: "75%", justifyContent: "flex-start", borderRadius: "25px"}}>
                   <Avatar sx={{ width: 24, height: 24, marginRight: "15px"}} alt="D" src="/static/images/avatar/1.jpg" />
                   <a>Answer...</a>
               </Button>
               <br/> <br/>

       </Box>
           </div>

       </>

    )
}