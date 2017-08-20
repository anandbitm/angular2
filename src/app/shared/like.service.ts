import {Injectable} from "@angular/core";
import {Subject} from "rxjs/subject";

// it should be outside of class
export interface Message{
    type:string;
    likes:number;
}

@Injectable()
export class LikeService{

    likesSubject:Subject<Message> = new Subject(); //this is publisher 

    constructor(){
        console.log("like service created!");
    }

    private _homeLikes : number=0;

    get homeLikes(){
        return this._homeLikes;
    }

    set homeLikes(value:number){
        this._homeLikes =value;
        //subscribe in footer componet
        this.likesSubject.next(
            {
                type:'Home',
                likes:this._homeLikes
            }
        )
    }

    private _contactLikes:number = 0;
    
    get contactLikes () {
        return this._contactLikes;
    }

    set contactLikes(value: number) {
        this._contactLikes = value;
    }
}
