export const postAction = (posts) => dispatch => {
    dispatch({
        type: 'SIMPLE_ACTION',
        posts: posts
    })
}