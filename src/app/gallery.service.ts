import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { GalleryEntry } from './galleryEntry';

@Injectable()
export class GalleryService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'https://www.tanyixiong.com:8443/siteService/api/';

    constructor(private http: Http) { }

    public getGalleryEntries(): Promise<GalleryEntry[]> {
        return this.http.get(this.serviceUrl + "listGalleryEntries")
            .toPromise()
            .then(response => response.json())
            .then(rawGalleryEntries => {
                return rawGalleryEntries.map(rawGalleryEntry => new GalleryEntry(
                    rawGalleryEntry.name,
                    rawGalleryEntry.folderPath,
                    rawGalleryEntry.imagePaths
                ));
            })
            .catch(this.handleError)
    };

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}