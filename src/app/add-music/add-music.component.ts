import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../providers/global.service';
import { GetMusicService } from '../../providers/getMusic';
import { Cred,Id,Music } from '../../providers/global';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-add-music',
  templateUrl: './add-music.component.html',
  styleUrls: ['./add-music.component.css'],
  providers: [GetMusicService,GlobalService],
})
export class AddMusicComponent implements OnInit {
  
  id:string;
  musicInfos:Music[]=[];
  name:any;
  url:any;
  // 'http://music.163.com/api/song/detail/?id=' + this.id + '&ids=%5B' + this.id +'%5D&csrf_token=';
  constructor(public global:GlobalService,public getMusic: GetMusicService,private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }
  ok(){
    this.getMusic.add(this.id).subscribe();
    // this.global.pushId(new Id(this.id));
  }
  boom(){
    this.getMusic.search(this.name).subscribe();
    this.search();
  }
  search(){
    this.musicInfos = [];
    this.getMusic.searchMusic(this.name)
    .subscribe(data=>{
        for(var i=0;i<data.json().result.songs.length;i++){
          // this.musicInfos.push(new Music(data.json().result.songs[i].name, this.judge(data.json().result.songs[i]),data.json().result.songs[i].album.name,data.json().result.songs[i].id));
          this.musicInfos.push(new Music(data.json().result.songs[i].name,this.judge(data.json().result.songs[i]),data.json().result.songs[i].album.name,data.json().result.songs[i].id));
        }
    })
  }

  judge(data){
    if(data.artists.length > 1){

      return data.artists[0].name + ' / ' + data.artists[1].name;
     
      
    }
    else {
       return data.artists[0].name;
    }

  }
}
