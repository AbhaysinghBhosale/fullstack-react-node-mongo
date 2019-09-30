import * as base from './Common';

export default class PostService{
    static getPosts(){
        return base.get(`getposts`)
    }

    static createPosts(postData){
        return base.post(`createpost`,postData)
    }
}
