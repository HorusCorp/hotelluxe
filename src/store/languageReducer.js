const initialState = {
    language: 'fr'
}

function languageReducer (state = initialState, action) {
    switch (action.type) {
        case 'fr':
            return { language: state.language = 'fr'}
        case 'en':
            return { language: state.language = 'en'}
        case 'es':
            return { language: state.language = 'es'}
        default:
            return state

    }
}

export default languageReducer