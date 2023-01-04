import express from "express";
import path from "path";
import { getQrCode } from "../wpp/qrCode"


const login = express()




login.get("/", async (req: express.Request, res: express.Response) => {
    try {
        const options = {
            root: path.join(__dirname, 'public'),
            dotfiles: "allow",
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        }

        res.sendFile(await getQrCode(), options)
    } catch (error) {
        res.send("aaaa")
    }



});





export { login }