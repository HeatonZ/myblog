import { Http,Headers,Jsonp, } from '@angular/http';
import { Injectable} from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class GetMusicService{
    
    originURL = 'http://music.163.com/api/song/detail/?id=';
    constructor(public http: Http,public jsonp:Jsonp,) {
        this.http = http;
    }
   
    getId(){
        let url = 'http://123.207.126.15/getMusic.php'
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.get(url);
    }
    
    getMusic(id) {
        // var url = this.originURL + id + '&ids=%5B' + id +'%5D&csrf_token=';
        let url = 'assets/json/music/'+id+'.json'
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        // return new Promise(resolve => {

        //   return  this.http.get(this.originURL + id + '&ids=%5B' + id +'%5D&csrf_token=')
        return this.http.get(url);
            // .subscribe(data => {
            //     resolve(true);
            //     console.log(data.json());
            // });
        // });
        
    }
    searchMusic(name){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // let url = 'http://s.music.163.com/search/get/?src=lofter&type=1&filterDj=true&s=' + name +'&limit=5&offset=0';
        let url = 'assets/json/'+name+'.json';
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/json');
        return this.http.get(url);
    }

    search(name){
        
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get('http://123.207.126.15/test.php?name='+ name,{headers:headers});
    }
    
    add(id){
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        return this.http.get('http://123.207.126.15/music.php?id='+ id,{headers:headers});
    }

}
