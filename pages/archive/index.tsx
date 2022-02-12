import Layout from "../../components/layout"
import React from "react";
import Head from 'next/head'
import Button from '@mui/material/Button'
import {IconButton, Stack} from "@mui/material";
import SmallAvatar from "@mui/material/Avatar";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Avatar from "@mui/material/Avatar";
import ProgressTopBar from "../../components/progress";
export default function IndexPage() {
  return (


<>
  <Head>
    <title>Meta Tags — Preview, Edit and Generate</title>
    <meta name="title" content="Meta Tags — Preview, Edit and Generate"/>
    <meta name="description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>


    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://metatags.io/"/>
    <meta property="og:title" content="Meta Tags — Preview, Edit and Generate"/>
    <meta property="og:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
    <meta property="og:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>


    <meta property="twitter:card" content="summary_large_image"/>
    <meta property="twitter:url" content="https://metatags.io/"/>
    <meta property="twitter:title" content="Meta Tags — Preview, Edit and Generate"/>
    <meta property="twitter:description"
          content="With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!"/>
    <meta property="twitter:image"
          content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"/>
  </Head>

  <Layout>
    {/*<h1>NextAuth.js Example</h1>*/}

    <ProgressTopBar/>
    <br/>

    <Stack spacing={2}>
      <a>Item 1</a>
      <a>Item 2</a>
      <a>Item 3</a>
      <a>Item 4</a>
    </Stack>

    <div style={{width: "75%", height: "25%"}}>

    </div>
  <Button style={{}}>Send aaMessage</Button> <button>send</button>
  </Layout>
  </>


  )
}
