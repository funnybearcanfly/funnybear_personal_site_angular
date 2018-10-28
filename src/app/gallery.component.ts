import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta, TransferState, makeStateKey } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

import { GalleryEntry } from './galleryEntry';
import { GalleryService } from './gallery.service';

// keep transferstate to avoid duplicate http call.
// e.g. if the data has been returned when SSR, then there is no need to call from browser.
const GALLERY_KEY = makeStateKey('gallery');

@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    galleryEntries: GalleryEntry[];

    loading = false;

    constructor(
        private meta: Meta,
        private state: TransferState,
        private galleryService: GalleryService) {
            this.meta.addTags([
                { name: 'description', content: '谭一雄的摄影集' },
                { name: 'author', content: 'yixiong' },
                { name: 'keywords', content: '摄影,旅游,佳能' }
            ]);
        }

    getGalleryEntries(): void {
        this.galleryService
            .getGalleryEntries()
            .then(galleryEntries => {
                this.galleryEntries = galleryEntries;
                this.loading = false;
                this.state.set(GALLERY_KEY, galleryEntries as any);
            });

        setTimeout(() => {
            if (this.galleryEntries === null) {
                this.loading = true;
             }
        }, 500);
    }

    ngOnInit(): void {
        this.galleryEntries = this.state.get(GALLERY_KEY, null as any);
        if (!this.galleryEntries) {
            this.galleryEntries = null;
            this.getGalleryEntries();
        }
    }
}