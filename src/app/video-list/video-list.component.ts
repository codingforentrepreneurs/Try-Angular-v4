import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
    title = "Video List";
    someItem = "<h1>Hi there</h1>"
    //videoList = ["Item 1", "Item 2", "Item 3"]
    videoList = [
        {
         name: "Item 1",
         slug: "item-1",
         embed: `1hyjLD7pk10`,
        },
        {
         name: "Item 2",
         slug: "item-2",
         embed: `1hyjLD7pk10`,
        },
        {
         name: "Item 3",
         slug: "item-3",
         embed: null,
        }
    ]
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  getEmbedUrl(item){
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + item.embed + '?ecver=2')
  }

}

// ng g component youComponentName
