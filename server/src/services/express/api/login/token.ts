import { ConfigObject, NotificationLanguage } from "@open-wa/wa-automate";
import express from "express";
import * as fs from "fs";
import * as crypto from "crypto"
import { createSession, pathToQrs } from "../../../wpp/whatsapp"

const token = express()

const session = crypto.randomBytes(10).toString('hex')

const launchConfig: ConfigObject = {
    useChrome: true,
    autoRefresh: true,
    cacheEnabled: false,
    authTimeout: 60,
    discord: "",
    headless: true,
    hostNotificationLang: NotificationLanguage.PTBR,
    logFile: true,
    multiDevice: true,
    qrLogSkip: true,
    qrTimeout: 0,
    popup: 3333,
    sessionId: session
};


token.get("/", async (req: express.Request, res: express.Response) => {
    try {
        createSession(launchConfig);

        const pathQrCode = `${__dirname}\\..\\..\\public\\qrcode\\${session}.png`
        for (let i = 0; i < 60; i++) {
            if (fs.existsSync(pathQrCode)) {
                res.json({"session":session});
                break
            }
            await new Promise(r => setTimeout(r, 1000))
        }
    } catch (error) {
        res.send(error)
    }
});




export { token }