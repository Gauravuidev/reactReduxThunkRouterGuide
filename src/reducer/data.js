const initialState = {data : 'Suresh', dataAsync: 'GUarav'};

function dataReducer (state=initialState, action) {
    switch(action.type) {
        case 'Message': 
            return {
                ...state,
                data: action.payload
            };
        case 'MessageAsyc':
            return {
                ...state,
                dataAsync: action.payload
            }    
        default:
            return state
    }
}

export default dataReducer;