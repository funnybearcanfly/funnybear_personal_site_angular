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
                thumbnailsColumns: 4,
                imageAnimation: NgxGalleryAnimation.Slide,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
            },
            // max-width 800
            {
                breakpoint: 800,
                width: '100%',
                height: '290px',
                imagePercent: 80,
                thumbnailsPercent: 20,
                thumbnailsMargin: 20,
                thumbnailMargin: 20,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
            },
            // max-width 400
            {
                breakpoint: 400,
                preview: false,
                imageSize: NgxGalleryImageSize.Contain,
                thumbnailSize: NgxGalleryImageSize.Contain,
            }
        ];

        this.galleryImages = [
            {
                small: 'assets/course-certificates/Algorithms-and-Data Structures-in-Java-Part-I-small.jpg',
                medium: 'assets/course-certificates/Algorithms-and-Data Structures-in-Java-Part-I.jpg',
                big: 'assets/course-certificates/Algorithms-and-Data Structures-in-Java-Part-I.jpg'
            },
            {
                small: 'assets/course-certificates/Java-Advanced-Algorithm-small.jpg',
                medium: 'assets/course-certificates/Java-Advanced-Algorithm.jpg',
                big: 'assets/course-certificates/Java-Advanced-Algorithm.jpg'
            },
            {
                small: 'assets/course-certificates/Multithreading-and-Parallel-Computing-in-Java-small.jpg',
                medium: 'assets/course-certificates/Multithreading-and-Parallel-Computing-in-Java.jpg',
                big: 'assets/course-certificates/Multithreading-and-Parallel-Computing-in-Java.jpg'
            },
            {
                small: 'assets/course-certificates/Java-Memory-Management-small.jpg',
                medium: 'assets/course-certificates/Java-Memory-Management.jpg',
                big: 'assets/course-certificates/Java-Memory-Management.jpg'
            },
            {
                small: 'assets/course-certificates/Microservices-with-Spring-Cloud-small.jpg',
                medium: 'assets/course-certificates/Microservices-with-Spring-Cloud.jpg',
                big: 'assets/course-certificates/Microservices-with-Spring-Cloud.jpg'
            },
            {
                small: 'assets/course-certificates/Learn-Linux-in-5-Days-and-Level-Up-Your-Career-small.jpg',
                medium: 'assets/course-certificates/Learn-Linux-in-5-Days-and-Level-Up-Your-Career.jpg',
                big: 'assets/course-certificates/Learn-Linux-in-5-Days-and-Level-Up-Your-Career.jpg'
            },
            {
                small: 'assets/course-certificates/Fundamental-Financial-Math-small.jpg',
                medium: 'assets/course-certificates/Fundamental-Financial-Math.jpg',
                big: 'assets/course-certificates/Fundamental-Financial-Math.jpg'
            },
            {
                small: 'assets/course-certificates/Statistics-for-Data-Science-and-Business-Analysis-small.jpg',
                medium: 'assets/course-certificates/Statistics-for-Data-Science-and-Business-Analysis.jpg',
                big: 'assets/course-certificates/Statistics-for-Data-Science-and-Business-Analysis.jpg'
            },
            {
                small: 'assets/course-certificates/The-Secrets-of-Body-Language-small.jpg',
                medium: 'assets/course-certificates/The-Secrets-of-Body-Language.jpg',
                big: 'assets/course-certificates/The-Secrets-of-Body-Language.jpg'
            },
            {
                small: 'assets/course-certificates/Blockchain-and-Bitcoin-Fundamentals-small.jpg',
                medium: 'assets/course-certificates/Blockchain-and-Bitcoin-Fundamentals.jpg',
                big: 'assets/course-certificates/Blockchain-and-Bitcoin-Fundamentals.jpg'
            },
            {
                small: 'assets/course-certificates/Blockchain-A-Z-Learn-How-To-Build-Your-First-Blockchain-small.jpg',
                medium: 'assets/course-certificates/Blockchain-A-Z-Learn-How-To-Build-Your-First-Blockchain.jpg',
                big: 'assets/course-certificates/Blockchain-A-Z-Learn-How-To-Build-Your-First-Blockchain.jpg'
            },
            {
                small: 'assets/course-certificates/Python-for-Financial-Analysis-and-Algorithmic-Trading-small.jpg',
                medium: 'assets/course-certificates/Python-for-Financial-Analysis-and-Algorithmic-Trading.jpg',
                big: 'assets/course-certificates/Python-for-Financial-Analysis-and-Algorithmic-Trading.jpg'
            }
        ];
    }
}
