import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FeedItem } from '../models/feed-item.model';
import { FeedProviderService } from '../services/feed.provider.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent implements OnInit {
  @Input() feedItem: FeedItem;
  @Input() src: any;

  subscriptions: Subscription[] = [];

  constructor( private feed: FeedProviderService ) { }

  async ngOnInit() {

  }

  filterImage($event) {
    if(!this.src) {
      this.feed.getFilteredImage(this.feedItem.url.split("?")[0]).subscribe((src) => {
        this.src = src;
      });
    }else {
      this.src = null;
    }
  }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
