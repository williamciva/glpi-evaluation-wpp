import express = require("express");
import bodyParser = require('body-parser')
import { api } from "./api"


export default function mainApp() {

    const app = express()


    console.log("rodando")

    
    app.use(bodyParser.json())
    app.use("/api", api)
    app.use('/api/qrcode/', express.static(`${__dirname}/public/qrcode/`))
    


    app.listen(8080 || 80)

}
