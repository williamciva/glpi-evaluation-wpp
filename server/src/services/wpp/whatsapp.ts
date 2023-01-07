import { create, Client, ConfigObject, ev } from '@open-wa/wa-automate';
import * as fs from "fs";
import Path from "path"


const clientSessionRegistry = new Map();
const pathToQrs = Path.resolve(__dirname, '../express/public/qrcode');


const start = (client: Client) => {
    clientSessionRegistry.set(client.getSessionId(), client)
}


const createSession = async (launchConfig: ConfigObject) => {
    return await create(launchConfig).then((client) => {
        start(client)
        return client.getSessionId()
    })
}


ev.on('qr.**', async (qrcode, sessionId) => {
    const imageBuffer = Buffer.from(qrcode.replace('data:image/png;base64,', ''), 'base64');
    fs.writeFileSync(`${pathToQrs}\\${sessionId}.png`, imageBuffer);
});


const getClient = (sessionId: string) => {
    return clientSessionRegistry.get(sessionId)
}


export { getClient, createSession, pathToQrs }