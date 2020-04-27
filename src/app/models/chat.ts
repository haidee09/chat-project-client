export class Chat{
    
    nickname: string;
    message : string;
    date : Date;

    constructor(nickname: string, message: string){
        this.nickname = nickname;
        this.message = message;
        this.date = new Date();
    }

    setUserNickname(nickname : string){
        this.nickname = this.nickname;
    }

    setMessage(message : string){
        this.message = message;
    }

    getNickname() : string {
        return this.nickname
    }

    setDate(): Date{
        return this.date
    }

    getMessage() : string{
        return this.message;
    }

    getDate() : Date{
        return this.date;
    }
}