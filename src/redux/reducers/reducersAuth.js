const initialState = {
    authToken: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, //copy all previous states
                authToken: typeof action.payload === 'string' ? action.payload : action.payload.authToken,
            }
        case 'REGISTER':
            return {
                ...state, //copy all previous states
                authToken: action.payload,
            }
        case 'LOGOUT':
            return {
                authToken: null,
            }
        default:
            return state;
    }
}