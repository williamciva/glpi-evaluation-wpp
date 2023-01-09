import express = require("express");
var cors = require('cors')
import bodyParser = require('body-parser')
import { api } from "./api/api"



export default function mainApp() {

    const app = express()


    console.log("rodando")

    app.use(cors())
    app.use(bodyParser.json())
    app.use("/api", api)
    app.use('/api/qrcode/', express.static(`${__dirname}/public/qrcode/`))
    


    app.listen(8080 || 80)

}
