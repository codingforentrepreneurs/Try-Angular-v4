import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit, OnDestroy {
    private req: any;
    title = "Video List";
    someItem = "<h1>Hi there</h1>"
    todayDate; // https://angular.io/docs/ts/latest/guide/pipes.html
    videoList: [any];
  constructor(private http:Http) {}

  ngOnInit() {
    this.todayDate = new Date()
    this.req = this.http.get('assets/json/videos.json').subscribe(data=>{
      console.log(data.json())
      this.videoList = data.json() as [any];
    })

  }

  ngOnDestroy(){
    this.req.unsubscribe()
  }

  getEmbedUrl(item){
    return 'https://www.youtube.com/embed/' + item.embed + '?ecver=2'
  }

}

// ng g component youComponentName
