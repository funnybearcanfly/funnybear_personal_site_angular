import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    galleryOptions: NgxGalleryOptions[];
    galleryImages: NgxGalleryImage[];

    constructor(private meta: Meta) {
            this.meta.addTags([
                { name: 'description', content: '谭一雄的个人经历' },
                { name: 'author', content: 'yixiong' },
                { name: 'keywords', content: '摩根史坦利,花旗,投资银行,武汉大学,复旦大学,Udemy' }
            ]);
        }

    ngOnInit(): void {

        this.galleryOptions = [
            {
                width: '768px',
                height: '576px',
                imageAnimation: NgxGalleryAnimation.Slide,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 4,
                thumbnailSize: NgxGalleryImageSize.Contain,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                previewSwipe: true,
                imageBullets: true,
                imageSwipe: true,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '350px',
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 6,
                thumbnailSize: NgxGalleryImageSize.Contain,
                previewCloseOnClick: true,
                previewCloseOnEsc: true,
                previewSwipe: true,
                imageBullets: true,
                imageSwipe: true,
            },
            // max-width 400
            {
                breakpoint: 400,
                height: '270px',
                preview: false,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailsColumns: 4,
                thumbnailSize: NgxGalleryImageSize.Contain,
                previewSwipe: true,
                imageBullets: true,
                imageSwipe: true,
            }
        ];

        this.galleryImages = [
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Algorithms-and-Data Structures-in-Java-Part-I.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Algorithms-and-Data Structures-in-Java-Part-I.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Algorithms-and-Data Structures-in-Java-Part-I.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Blockchain-and-Bitcoin-Fundamentals.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Blockchain-and-Bitcoin-Fundamentals.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Blockchain-and-Bitcoin-Fundamentals.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Blockchain-A-Z-Learn-How-To-Build-Your-First-Blockchain.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Blockchain-A-Z-Learn-How-To-Build-Your-First-Blockchain.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Blockchain-A-Z-Learn-How-To-Build-Your-First-Blockchain.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Fundamental-Financial-Math.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Fundamental-Financial-Math.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Fundamental-Financial-Math.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Java-Advanced-Algorithm.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Java-Advanced-Algorithm.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Java-Advanced-Algorithm.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Java-Memory-Management.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Java-Memory-Management.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Java-Memory-Management.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Learn-Linux-in-5-Days-and-Level-Up-Your-Career.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Learn-Linux-in-5-Days-and-Level-Up-Your-Career.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Learn-Linux-in-5-Days-and-Level-Up-Your-Career.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Microservices-with-Spring-Cloud.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Microservices-with-Spring-Cloud.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Microservices-with-Spring-Cloud.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Multithreading-and-Parallel-Computing-in-Java.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Multithreading-and-Parallel-Computing-in-Java.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Multithreading-and-Parallel-Computing-in-Java.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Python-for-Financial-Analysis-and-Algorithmic-Trading.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Python-for-Financial-Analysis-and-Algorithmic-Trading.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Python-for-Financial-Analysis-and-Algorithmic-Trading.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/Statistics-for-Data-Science-and-Business-Analysis.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/Statistics-for-Data-Science-and-Business-Analysis.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/Statistics-for-Data-Science-and-Business-Analysis.jpg',
            },
            {
                small: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/small/The-Secrets-of-Body-Language.jpg',
                medium: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/medium/The-Secrets-of-Body-Language.jpg',
                big: 'https://www.tanyixiong.com:3333/resource/gallery/udemy/large/The-Secrets-of-Body-Language.jpg',
            }
        ];
    }
}