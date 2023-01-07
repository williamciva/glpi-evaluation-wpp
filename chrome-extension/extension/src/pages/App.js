import React, { useState, useLayoutEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (localStorage.getItem("serverProvider") != null) {
      navigate("/login");
    }
  }, [navigate]);


  const [serverProvider, setServerProvider] = useState("")
  const [dialog, setDialog] = useState(false)


  const saveServerProvider = () => {
    localStorage.setItem("serverProvider", serverProvider)
    navigate("/login");
  }


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
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"} minWidth={"100vw"}>
          <h1>Bem Vindo ao GLPI Send Satisfaction</h1>
          <h3>Primeiramente vamos nos conectar-se com o seu servidor de WA-GLPI</h3>
          <Grid paddingBottom={"1%"} paddingTop={"1%"}>
            <TextField required
              label="IP do servidor WA-GLPI"
              variant="outlined"
              type={'url'}
              color="secondary"
              onChange={(e) => { setServerProvider(e.target.value) }}
              value={serverProvider}
              focused
              sx={{ input: { color: 'aliceblue' } }}
            />
          </Grid>
          <Grid paddingBottom={"1%"} paddingTop={"1%"}>
            <Button variant="contained"
              color='secondary'
              onClick={() => { setDialog(true) }}
            >
              Conectar
            </Button>
            <Dialog open={dialog} >
              <DialogTitle id="responsive-dialog-title">
                {"O servidor está correto?"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText>
                  {"O servidor  " + serverProvider + "  está correto?"}<br></br>
                  {"Você ainda poderá alterar esse servidor nas configurações caso seja necessário."}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button autoFocus onClick={() => { setDialog(false); setServerProvider("") }}>
                  Não, desejo corrigir.
                </Button>
                <Button onClick={() => { setDialog(false); saveServerProvider() }} autoFocus>
                  Sim, desejo prosseguir.
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
        </Grid>
      </Grid>
    </Grid >

  );
}

export default App;
