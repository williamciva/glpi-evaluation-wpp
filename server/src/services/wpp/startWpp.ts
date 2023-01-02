import { create, Message, Client, NotificationLanguage } from '@open-wa/wa-automate';



function start(client: Client) {
    client.onMessage(async (message: Message) => {
        if (message.body === 'Hi') {
            await client.sendText(message.from, '👋 Hello!');
        }
    });
}


const launchConfig = {
    useChrome: true,
    autoRefresh: true,
    cacheEnabled: false,
    sessionId: 'glpiEvaluation',
    authTimeout: 60,
    devtools: {
        user: "admin",
        pass: "q!{D5<w'Zh2f^R8"
    },
    discord: "",
    ezqr: true,
    headless: true,
    hostNotificationLang: NotificationLanguage.PTBR,
    logFile: true,
    multiDevice: true,
    qrLogSkip: true,
    qrTimeout: 0,
    restartOnCrash: start
};


export default function startWpp() {
    create(launchConfig).then(start);
} 