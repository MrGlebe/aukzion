const initialState = {
    someString: 'some string',
    someValue: 123
};

export const someReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'SOME_ACTION':
            return {...state};

        default:
            return state;
    }
};
