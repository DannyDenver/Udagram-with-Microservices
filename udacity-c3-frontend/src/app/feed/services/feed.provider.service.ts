import { Injectable } from '@angular/core';
import { FeedItem, feedItemMocks } from '../models/feed-item.model';
import { BehaviorSubject, Observable, fromEvent } from 'rxjs';
import { from } from 'rxjs';

import { ApiService } from '../../api/api.service';
import { switchMap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedProviderService {
  currentFeed$: BehaviorSubject<FeedItem[]> = new BehaviorSubject<FeedItem[]>([]);
  filteredImage$: BehaviorSubject<any> = new BehaviorSubject<any>("");

  constructor(private api: ApiService) { }

  async getFeed(): Promise<BehaviorSubject<FeedItem[]>> {
    const req = await this.api.get('/feed');
    const items = <FeedItem[]> req.rows;
    this.currentFeed$.next(items);
    return Promise.resolve(this.currentFeed$);
  }

  // async getFilteredImage(url: string): Promise<BehaviorSubject<any>> {
  //   const req = await this.api.getImage('/filteredimage?image_url=' + url);
  //   this.createImageFromBlob(req)
    
  //   return Promise.resolve(this.filteredImage$);
  // }

  getFilteredImage(url: string): Observable<any> {
    return this.api.getImage('/filteredimage?image_url=' + url).pipe(switchMap((req: Blob) => {
        return this.createImageFromBlob(req);
    }))
  }

  createImageFromBlob(image: Blob): Observable<any> {
    let reader = new FileReader();
    if (image) {
      reader.readAsDataURL(image);
   }

    return fromEvent(reader, "load").pipe(map(() => {
       return reader.result;
    }));
 }

  async uploadFeedItem(caption: string, file: File): Promise<any> {
    const res = await this.api.upload('/feed', file, {caption: caption, url: file.name});
    const feed = [res, ...this.currentFeed$.value];
    this.currentFeed$.next(feed);
    return res;
  }

  // async getFilteredImage(url: string): Observable<any> {
  //   const req = await this.api.getImage('/filteredimage?image_url=' + url);
  //   this.createImageFromBlob(req)
    
  //   return Promise.resolve(this.filteredImage$);
  // }

}

// async getFeed() {
//   const url = `${API_HOST}/feed`;

//   const req = this.http.get(url, this.httpOptions).pipe(
//     map(this.extractData));
//     // catchError(this.handleError));
//   const resp = <any> (await req.toPromise());
//   return resp.rows;
// }
