import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { GetMusicService } from '../../providers/getMusic';
import { GlobalService } from '../../providers/global.service';
import { Cred, Id } from '../../providers/global';
import { Creds } from '../../providers/global.mock';
import { Http, Headers } from '@angular/http';
var w = 0;
var h = 0;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [GetMusicService, GlobalService],
  animations: [
    trigger('show', [
      state('in', style({})),
      transition('void => *', [
        animate(500, keyframes([
          style({ opacity: 0}),
          style({ opacity: 1}),
          style({ opacity: 1})
        ]))
      ]),
      transition('* => void', [
        animate(500, keyframes([
        style({opacity: 1}),
        style({opacity: 1}),
        style({opacity: 0})
      ]))
      ]),
      // state('firstpos',style({transform:'translateY(0)'})),
      // state('secondpos',style({transform:'translateY(10%)'})),
      // transition('firstpos => secondpos',[
      //   animate('200ms ease-in')
      // ]),
      // transition('secondpos => firstpos',[
      //   animate('200ms ease-in')
      // ])
    ])
  ]
})
export class HomeComponent implements OnInit {
  creds: Cred[];
  id: Id[];
  constructor(public getMusic: GetMusicService, public http: Http, public global: GlobalService) {
    this.creds = global.getCred();
    this.http = http;
    this.id = global.getId();
    this.init();
  }

  init() {
    this.getMusic.getId().subscribe(data => {
      for (var count = h; count < data.json().length - 1; count++) {
        this.global.pushId(new Id(data.json()[count].id));
        h++;
      }
    })

    for (var i = w; i < this.id.length; i++) {
      w++;
      // this.global.cleanCreds();
      this.getMusic.getMusic(this.id[i].number).subscribe(data => {
        this.global.pushCred(new Cred(data.json().songs[0].name, data.json().songs[0].album.artists[0].name, data.json().songs[0].album.blurPicUrl, data.json().songs[0].mp3Url));

        error => {
          this.global.popId();
          w--;
        }
      });

      //   var headers = new Headers();
      //   headers.append('Content-Type', 'application/x-www-form-urlencoded');
      //   this.http.post('http://music.163.com/api/song/detail/?id=' + this.id[i].number + '&ids=%5B' + this.id[i].number + '%5D&csrf_token=', { headers: headers })

      //     .subscribe(data => {
      //       this.global.pushCred(new Cred(data.json().songs[0].name, data.json().songs[0].album.artists[0].name, data.json().songs[0].album.blurPicUrl, data.json().songs[0].mp3Url));

      //       error => {
      //         this.global.popId();
      //       }
      //     })
    }

  }
  ngOnInit() {
  }


}
