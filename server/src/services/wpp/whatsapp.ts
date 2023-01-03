import { create, Client, NotificationLanguage, ConfigObject } from '@open-wa/wa-automate';



var client: Client;

const launchConfig: ConfigObject = {
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
    qrTimeout: 0
};


const start = () => {
    create(launchConfig).then((clientC: Client) => {
        client = clientC;
    })
}


export { client, start }