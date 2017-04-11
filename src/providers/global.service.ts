import { Injectable } from '@angular/core';
import { Creds,Ids,MusicAlbums,MusicNames,MusicSingers } from './global.mock';
@Injectable()
export class GlobalService {

  constructor() { }

  pushId(bb){
    Ids.push(bb);
    
  }

  pushCred(cred){
    Creds.push(cred);
  }

  pushName(name){
    MusicNames.push(name);
  }
  pushSinger(singer){
    MusicSingers.push(singer);
  }
  pushAlbum(album){
    MusicAlbums.push(album);
  }

  getId(){
    return Ids;
  }

  getCred(){
    return Creds;
  }

  popId(){
    Ids.pop();
  }

  // cleanCreds(){
  //   while(Creds.length>0){
  //       Creds.pop();
  //   }
  // }


}
