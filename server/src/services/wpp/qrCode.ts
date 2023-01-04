import { client } from "./whatsapp"
import * as fs from "fs";
import Path from "path"
import Axios from "axios"

export async function getQrCode(): Promise<string> {

    var finallyResponse: string = "";

    try {

        client.getMe()
            .then((obj) => {
                finallyResponse = obj
            })
            .catch((err) => {
                finallyResponse = err
            })

    } catch (error) {

        const url = "http://localhost:3000/qr"
        const path = Path.resolve(__dirname, '../express/public', 'qrcode.png')
        const writer = fs.createWriteStream(path)


        const response = Axios({
            url,
            method: 'GET',
            responseType: 'stream'
        })
            .then((response) => {
                response.data.pipe(writer)
            })

        return "qrcode.png"

    }

    return finallyResponse
};

