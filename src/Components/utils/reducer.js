export const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_LIST': 
            return {...state, list: action.payload}
        case 'GET_DETAIL': 
            return {...state, dentistaSelected: action.payload}
        case 'ADD_FAV':
            return {...state, favs: [...state.favs, action.payload]}
        case 'DELETED_FAV': 
            const filteredFavs = state.favs.filter((fav) => fav.id !== action.payload)
            return {...state, favs: filteredFavs}
    }
}