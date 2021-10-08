let state = {
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowConnectionsFromStrangers: false,
    screenSharingActive: false
}

export const setSocketId = (socketId) => {
    state = {
        ...state,
        socketId: socketId
    }
    console.log(state);
}

export const setLocalStream = (localStream) => {
    state = {
        ...state,
        localStream: localStream
    }
}

export const allowConnectionsFromStrangers = (allowConnectionsFromStrangers) => {
    state = {
        ...state,
        allowConnectionsFromStrangers: allowConnectionsFromStrangers
    }
}

export const setScreenSharingActive = (screenSharingActive) => {
    state = {
        ...state,
        screenSharingActive: screenSharingActive
    }
}

export const setScreenSharingStream = (screenSharingStream) => {
    state = {
        ...state,
        screenSharingStream: screenSharingStream
    }
}

export const setRemoteStream = (remoteStream) => {
    state = {
        ...state,
        remoteStream: remoteStream
    }
}

export const getState = () => state