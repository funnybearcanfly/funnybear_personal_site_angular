import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';

import { Gallery } from './gallery';
import { GalleryEntry } from './galleryEntry';

@Injectable()
export class GalleryService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'https://www.tanyixiong.com:8443/siteService/api/';

    constructor(private http: HttpClient) { }

    public getGalleryEntries(): Promise<GalleryEntry[]> {
        return this.http.get(this.serviceUrl + "listGalleryEntries")
            .toPromise()
            .then(response => response as Gallery[])
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