import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '768px',
                height: '576px',
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '600px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false
            }
        ];

        this.galleryImages = [
            {
                small: 'https://www.tanyixiong.com:8443/static/image/large/shandong.jpg',
                medium: 'https://www.tanyixiong.com:8443/static/image/large/shandong.jpg',
                big: 'https://www.tanyixiong.com:8443/static/image/large/shandong.jpg'
            },
            {
                small: 'https://www.tanyixiong.com:8443/static/image/large/shandong2.jpg',
                medium: 'https://www.tanyixiong.com:8443/static/image/large/shandong2.jpg',
                big: 'https://www.tanyixiong.com:8443/static/image/large/shandong2.jpg'
            },
            {
                small: 'https://www.tanyixiong.com:8443/static/image/large/shandong3.jpg',
                medium: 'https://www.tanyixiong.com:8443/static/image/large/shandong3.jpg',
                big: 'https://www.tanyixiong.com:8443/static/image/large/shandong3.jpg'
            },
            {
                small: 'https://www.tanyixiong.com:8443/static/image/large/shandong4.jpg',
                medium: 'https://www.tanyixiong.com:8443/static/image/large/shandong4.jpg',
                big: 'https://www.tanyixiong.com:8443/static/image/large/shandong4.jpg'
            }
        ];
    }
}