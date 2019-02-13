export const ActionTypes = {
    APP_DEC: '[APP] DECREMENT',
    APP_INC: '[APP] INCREMENT',
    APP_RANDOM: '[APP] RANDOM',
}

export const inc = () => {
    return ({
        type: ActionTypes.APP_INC,
    })
}

export const desc = () => {
    return ({
        type: ActionTypes.APP_DEC,
    })
}

export const random = (payload) => {
    return ({
        type: ActionTypes.APP_RANDOM,
        payload
    })
}