export class User{

    nickname: string;
    online: boolean;

    constructor(){
        this.online = true;
        this.nickname = '';
    }

    setUserOline(online : boolean){
        this.online = online;
    }
    
    setUserNickname(nickname : string){
        this.nickname = nickname;
    }

    getUserOnline() : boolean{
        return this.online;
    }

    getNickname() : string{
        return this.nickname;
    }

}