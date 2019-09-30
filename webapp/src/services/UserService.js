import * as base from './Common';

export default class UserService{
    static getUsers(){
        return base.get(`getUsers`);
    }

    static createUser(userData){
        return base.post(`createUser`,userData);
    }
}
