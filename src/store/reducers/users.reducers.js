


const initialState = {
    users : {
        active: null,
        list:[
            'Pedro',
            'Carlos',
            'jorge',
            'Luciano',
            'Alex',
            'livia',
            'Ana luiza'
        ]
    }
}

const usersReducer = (state = initialState.users , action ) => {
   
    if(action.type ==  'CHANGE_USER'){

        return {
            ...state,
            active: action.payload
        }
    }

    return state;
    
}

export default usersReducer;