import express = require("express");
import bodyParser = require('body-parser')
import { api } from "./api"
import { start } from "../wpp/whatsapp";


export default function mainApp() {

    const app = express()
    start();


    console.log("rodando")


    app.use(bodyParser.json())
    app.use("/api", api)
    


    app.listen(8080 || 80)

}
