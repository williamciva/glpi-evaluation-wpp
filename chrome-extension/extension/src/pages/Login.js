import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useNavigate } from "react-router-dom";



export default function Login() {
    const navigate = useNavigate();


    const [dialog, setDialog] = useState(false)
    const [buttomContext, setButtomContext] = useState("")

    const saveMethodLogin = (id) => {
        id === "button-login-1" ? navigate("/token") : navigate("/auth");
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
                    <h1>Selecione qual método de login deseja fazer</h1>
                    <Grid paddingBottom={"1%"} paddingTop={"1%"}>
                        <Button id="button-login-1" variant="contained"
                            color='secondary'
                            onClick={(e) => { setDialog(true); setButtomContext(e.target) }}
                        >
                            Login com Token
                        </Button>
                    </Grid>
                    <Grid paddingBottom={"1%"} paddingTop={"1%"}>
                        <Button id="button-login-2" variant="contained"
                            color='secondary'
                            onClick={(e) => { setDialog(true); setButtomContext(e.target) }}
                        >
                            Login com E-mail e Senha
                        </Button>
                    </Grid>
                    <Dialog open={dialog}>
                        <DialogContent>
                            <DialogContentText>
                                {"O botão selecionado foi  " + buttomContext.innerHtml + ",  está correto?"}<br></br>
                                {buttomContext.id === "button-login-1" ?
                                    "Com essa opção você fará login diretamente na apicação com um token gerado aleatóriamente e um Qrcode tempórario. Seu token e Qrcode tem validade de 4 horas, passado esse tempo será necessário vincular seu celular a um QRcode novamente." :
                                    "Com essa opção você fará login com um usuário e senha. Essa opção só necessita que você faça o vinculo de seu Qrcode com o celular apenas uma vez, no entanto ela não é gratuita, deseja prosseguir?"}
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button autoFocus onClick={() => { setDialog(false); saveMethodLogin(buttomContext.id) }}>
                                Não, desejo trocar minha opção.
                            </Button>
                            <Button autoFocus onClick={() => { setDialog(false); saveMethodLogin(buttomContext.id) }}>
                                Sim, desejo prosseguir.
                            </Button>
                        </DialogActions>
                    </Dialog>
                </Grid>
            </Grid>
        </Grid>

    )
}
