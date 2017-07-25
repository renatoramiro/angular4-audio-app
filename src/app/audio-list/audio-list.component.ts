import { Component, OnInit } from '@angular/core';

import { AudioService } from '../services/audio-service/audio.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css'],
  providers: [AudioService]
})
export class AudioListComponent implements OnInit {

  audios: any = [];

  constructor(private service: AudioService) { }

  ngOnInit() {
    this.service.fetchData().subscribe(data => {
      console.log(data);
      this.audios = data;
    });
  }

}
