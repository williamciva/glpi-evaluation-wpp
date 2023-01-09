import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Grid } from '@mui/material'

export default function Token() {


  const server = localStorage.getItem("serverProvider")
  const [sessionToken, setSessionToken] = useState(localStorage.getItem("sessionToken"))
  const [qrcode, setQrcode] = useState()


  const requestToken = () => {
    axios.get(`http://${server}/api/login/token`).then((res) => {
      localStorage.setItem("sessionToken", res.data.session)
      setSessionToken(res.data.session)
    })
  }

  const requestQrCode = () => {
    axios.get(`http://${server}/api/qrcode/${sessionToken}.png`).then((res) => {
      setQrcode(res.data)
    }).catch(()=>{
      localStorage.removeItem("sessionToken");
      requestToken();
    })
  }

  useEffect(() => {
    if (sessionToken === null) {
      requestToken()
    }
    requestQrCode()
  }, [requestToken, requestQrCode])


  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      minHeight={"101vh"}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        minWidth={"101vw"}
      >
        <img src={`http://${server}/api/qrcode/${sessionToken}.png`}></img>
      </Grid>
    </Grid>
  )
}
