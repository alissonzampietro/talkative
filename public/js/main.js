import * as store from './store.js';
import * as wss from './wss.js';
import * as listeners from './listeners.js';

const socket = io('/');
wss.registerSocketEvents(socket);
listeners.clipboardListener(store);
listeners.codeChatButton();