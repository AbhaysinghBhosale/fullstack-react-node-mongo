import * as base from './Common';

export default class PostService{
    static getPosts(){
        return base.get(`post`)
    }

    static createPosts(postData){
        return base.post(`post`,postData)
    }
}
