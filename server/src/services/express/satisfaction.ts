import { ChatId, ContactId, Content } from "@open-wa/wa-automate"
import express = require("express");

import { client } from "../wpp/whatsapp";
import { bodySatisfaction } from "./models/bodySatisfaction"


const satisfaction = express()




satisfaction.post("/", async (req: express.Request, res: express.Response) => {


    const bodySatisfaction: bodySatisfaction = req.body


    const chatId: ChatId = `${bodySatisfaction.phoneNumber}@c.us` as ContactId;
    const msg: Content = bodySatisfaction.messageSolution as Content

    await client.sendText(chatId, msg).then((r) => {
        res.json({
            Code: 200,
            Retorno: r.valueOf()
        })
    }).catch((err) => {
        res.send(err);
    })



});

satisfaction.get("/", (req: express.Request, res: express.Response) => {
    res.send("ota coisa")
});


export { satisfaction }