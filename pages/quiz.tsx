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
import {Send, Share, ShareLocation} from "@mui/icons-material";
import Head from "next/head";
import MetaHead from "../components/metaHead";
import AnswerBox from "../components/answerBox";
export default function Quiz() {
function handleAnswer() {
   window.open("/results")
}

    const url = 'https://giphy.com/gifs/h0nestyb-college-campus-honesty-b-wPNtqh5lRQ6LSdGgcz/fullscreen'
    const quizName = "Insert Quiz Name"
    let blankQuizButton = "blankQuizButtonPlain"
    const blankQuizButtonPlain = "blankQuizButtonPlain"
    const blankQuizButtonCorrect = "blankQuizButtonCorrect"
    const blankQuizButtonIncorrect = "blankQuizButtonIncorrect"
    return (

        <>

           <MetaHead title={quizName}/>

        <div className="backgroundGif">
            <br/>
            <ProgressTopBar/>
            <br/>
            <Stack  style={{background: "rgba(0,0,0,0.3)", color: "white", borderRadius: "25px", paddingRight: "10px"}} direction="row"
                    justifyContent="space-between"
                    alignItems="center" spacing={2}>
                <Avatar alt="Remy Sharp" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/atlanta-georgia-downtown-city-skyline-cavan-images.jpg" />
                <h3>{quizName}</h3>
                <MoreHorizIcon/>
            </Stack>
            <br/>
            <div  style={{textAlign: "center"}}>
                <img height="160px"

                     alt="hbcu gif text"
                     src={"https://media2.giphy.com/media/iFhPIGNQ1Ct50JNwy2/giphy.gif?cid=ecf05e47pjddk295tvkm8885uzfvqptyig2lho5idt50ja3i&rid=giphy.gif&ct=s"}/>
            </div>
            <br/>
            {/*<div style={{marginLeft: "10%", marginRight: "10%"}}>*/}
            {/*    <Box style={{color: "white", padding: "5px",textAlign: "center",*/}
            {/*        background: "black",*/}
            {/*        borderTopLeftRadius: "25px", borderTopRightRadius: "25px"}}>*/}
            {/*        <h3>What city is Howard University located in?</h3>*/}
            {/*    </Box>*/}
            {/*    <Box style={{textAlign: "center",*/}
            {/*        background: "rgba(255, 255, 255, 0.3)",*/}
            {/*        borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px"}}>*/}
            {/*        <br/>*/}
            {/*        <Button className={blankQuizButton}*/}
            {/*                onClick={() => blankQuizButton = "blankQuizButtonCorrect"}*/}
            {/*                variant={"contained"}*/}
            {/*              >*/}
            {/*            <Avatar sx={{ background: "white", color: "black", border: "1px black solid", width: 24, height: 24, marginRight: "15px"}} alt="A" src="/static/images/avatar/1.jpg" />*/}
            {/*            <a>Atlanta</a>*/}
            {/*        </Button>*/}
            {/*        <Button  className={blankQuizButton} variant={"contained"}>*/}
            {/*            <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="B" src="/static/images/avatar/1.jpg" />*/}
            {/*            <a>Washington D.C.</a>*/}
            {/*        </Button>*/}
            {/*        <Button  className={blankQuizButton} variant={"contained"} >*/}
            {/*            <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="C" src="/static/images/avatar/1.jpg" />*/}
            {/*            <a>Houston</a>*/}
            {/*        </Button>*/}
            {/*        <Button  className={blankQuizButton} variant={"contained"} >*/}
            {/*            <Avatar sx={{ background: "white", color: "black",border: "1px black solid",width: 24, height: 24, marginRight: "15px"}} alt="D" src="/static/images/avatar/1.jpg" />*/}
            {/*            <a>Houston</a>*/}
            {/*        </Button>*/}
            {/*        <br/> <br/>*/}

            {/*    </Box>*/}
            {/*</div>*/}
            <AnswerBox/>
            <div style={{textAlign: "center", marginTop: "20px"}}>

                <Button  variant={"outlined"} style={{
                    marginBottom: "15px",
                    marginRight: "15px",
                    justifyContent: "flex-start",
                    borderRadius: "25px",
                    color: "white",
                    border: "2px white solid"
                }}>
                    Provide Feedback
                </Button>

                <Button color={"primary"} variant={"contained"} style={{marginBottom: "15px",
                    justifyContent: "flex-start",
                    borderRadius: "25px",
                    background: "rgba(255, 255, 255, 0.3)",
                    color: "white",
                }}>
                    Share <Send style={{marginLeft: "5px"}}/>
                </Button>

            </div>
        </div>

        </>

    )
}