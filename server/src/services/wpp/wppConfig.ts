import { create, Client, decryptMedia, ev } from '@open-wa/wa-automate';

const launchConfig = {
    useChrome: true,
    autoRefresh: true,
    cacheEnabled: false,
    sessionId: 'hr',
    authTimeout: 60
};

function start(client) {
    client.onMessage(async message => {
        if (message.body === 'Hi') {
            await client.sendText(message.from, '👋 Hello!');
        }
    });
}

create(launchConfig).then(start);