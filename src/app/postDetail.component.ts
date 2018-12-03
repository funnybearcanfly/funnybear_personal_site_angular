import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meta } from '@angular/platform-browser';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl: './postDetail.component.html',
    styleUrls: ['./postDetail.component.css']
})
export class PostDetailComponent implements OnInit {
    post: Post;
    loading = false;
    key: String;

    constructor(
        private meta: Meta,
        private route: ActivatedRoute,
        private postService: PostService) { }

    getPostDetail(key: String): void {
        this.postService
            .getPostDetail(key)
            .then(post => {
                this.post = post;
                this.meta.addTags([
                    { name: 'description', content: post.description.toString() },
                    { name: 'author', content: post.authurName.toString() },
                    { name: 'keywords', content: post.keyword.toString() }
                ]);
                this.loading = false;
            });

        setTimeout(() => {
            if (this.post === null) {
                this.loading = true;
            }
        }, 500);
    }

    ngOnInit(): void { }

    ngDoCheck(): void {
        var id_para = this.route.snapshot.paramMap.get('key');
        if (this.key !== id_para) {
            this.post = null;
            this.key = id_para;
            console.log(this.key);
            this.getPostDetail(this.key);
        }
    }
}
