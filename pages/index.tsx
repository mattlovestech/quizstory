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
import {PlayArrow, Send, Share, ShareLocation} from "@mui/icons-material";
import Head from "next/head";
import MetaHead from "../components/metaHead";


export default function Quiz() {
function handleAnswer() {
   window.open("/results")
}

    const url = 'https://giphy.com/gifs/h0nestyb-college-campus-honesty-b-wPNtqh5lRQ6LSdGgcz/fullscreen'
    const quizName = "Howard University 101"
    return (

        <>
           <MetaHead title={quizName}/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Bangers&family=Roboto:ital,wght@1,300&display=swap"
                        rel="stylesheet"/>
                    <div className="backgroundGif">
            <br/>
            <ProgressTopBar value={50}/>
            <br/>
            <Stack  style={{background: "transparent", marginBottom: "20px", color: "white", borderRadius: "25px", paddingRight: "10px"}} direction="row"
                    justifyContent="space-between"
                    alignItems="center" spacing={2}>
                <h3> </h3>
                <MoreHorizIcon/>
            </Stack>
            <br/>
            <div  style={{textAlign: "center",color: "white"}}>
                <a style={{ fontSize: "90px",fontFamily: 'Bangers' }}> HBCU Trivia</a><br/>
                <br/>

                <i style={{ fontSize: "35px"}}> Insert five word tagline</i>
            </div>
            <br/>
                        <div style={{textAlign: "center", marginTop: "20px"}}>

                            <Button  href="/quiz" color={"primary"} variant={"contained"} style={{marginBottom: "15px",
                                justifyContent: "flex-start",
                                borderRadius: "25px",
                                background: "rgba(0, 0, 0, 0.65)",
                                color: "white",
                                fontSize: "23px",
                                paddingLeft: "70px",
                                paddingRight: "60px",
                                border: "1px white solid",
                                boxShadow: "1px 3px #000"
                            }}>
                               Play now <PlayArrow/>
                            </Button>

                        </div>

            <div style={{marginLeft: "10%", marginRight: "10%", marginTop: "80px"}}>
                <Box style={{textAlign: "center",
                    background: "rgba(255, 255, 255, 0.3)",
                    border: "2px white solid",
                    color: "white",
              borderRadius: "25px"}}>
                    <br/>

                    <div style={{padding: "18px", fontSize: "18px"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Odio pellentesque diam volutpat commodo. Quam vulputate dignissim
                    </div>
                    <br/>
                    <Button  variant={"outlined"} style={{
                        marginBottom: "15px",
                        marginRight: "15px",
                        justifyContent: "flex-start",
                        borderRadius: "25px",
                        color: "white",
                        border: "2px white solid"
                    }}>
                      Choose Quiz
                    </Button>

                </Box>
            </div>



        </div>

        </>

    )
}