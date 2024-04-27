export default (state , action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
        return {
           ...state,
           transtions: state.transtions.filter(transction => transction.id !== action.payload)
        }
        case 'ADD_TRANSACTION':
            return {
               ...state,
                transtions: [action.payload,...state.transtions]
            }
        default: 
            return state;
    }
}