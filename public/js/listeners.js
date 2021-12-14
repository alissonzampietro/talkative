import * as webRTCHandler from './webRTCHandler.js';
import * as constants from './constants.js';

export const clipboardListener = function(store) {
    document.getElementById("personal_code_copy_button").addEventListener("click", function() {
        const personalCode = store.getState().socketId;
        navigator.clipboard && navigator.clipboard.writeText(personalCode); 
    });
}

const startPreOffer = (element) => {
    const preOffer = {
        type: null,
        element: element,
        setType(type) {
            this.type = type;
            return this;
        },
        send() {
            webRTCHandler.sendPreOffer(this.element, this.type);
        }
    }

    return preOffer;
}

export const codeChatButton = function(store) {
    const personalCodeChatButton = document.getElementById('personal_code_chat_button');
    const personalCodeVideoButton = document.getElementById('personal_code_video_button');

    personalCodeChatButton.addEventListener('click', () => {
        startPreOffer(document.getElementById('personal_code_input').value)
            .setType(constants.callType.CHAT_PERSONAL_CODE)
            .send()
        console.log('chat button clicked');
    });

    personalCodeVideoButton.addEventListener('click', () => {
        startPreOffer(document.getElementById('personal_code_input').value)
            .setType(constants.callType.VIDEO_PERSONAL_CODE)
            .send()
        console.log('video button clicked');
    });
}