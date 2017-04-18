import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../videos/videos.service';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  providers: [VideoService]
})
export class VideoDetailComponent implements OnInit, OnDestroy {
    private routeSub:any;
    private req:any;
    video: any;
    slug:string;
  constructor(private route: ActivatedRoute, private _video:VideoService) { }

  ngOnInit() {
      this.routeSub = this.route.params.subscribe(params => {
          this.slug = params['slug']
          this.req = this._video.get(this.slug).subscribe(data=>{
            this.video = data
          })
      })
  }
  ngOnDestroy(){
      this.routeSub.unsubscribe()
      this.req.unsubscribe()
  }

}
