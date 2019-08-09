const INITIAL_STATE = {
    posts: {},
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SIMPLE_ACTION':
            return {
                ...state,
                posts: action.posts
            }
        default:
            return state
    }
    //no default
}