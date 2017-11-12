import { Component, OnInit } from '@angular/core';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Post } from './post';
import { PostService } from './post.service';

// keep transferstate to avoid duplicate http call.
// e.g. if the data has been returned when SSR, then there is no need to call from browser.
const POSTS_KEY = makeStateKey('posts');

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[];

    constructor(
        private postService: PostService,
        private state: TransferState) { }

    getPosts(): void {
        this.postService
            .getPosts()
            .then(posts => {
                this.posts = posts;
                this.state.set(POSTS_KEY, posts as any);
            });
    }

    ngOnInit(): void {
        this.posts = this.state.get(POSTS_KEY, null as any);
        if (!this.posts) {
            this.getPosts();
        }
    }
}
