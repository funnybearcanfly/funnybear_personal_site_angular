import { Component, OnInit } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[];

    constructor(
        private postService: PostService) { }

    getPosts(): void {
        this.postService
            .getPosts()
            .then(posts => this.posts = posts);
    }

    ngOnInit(): void {
        this.getPosts();
    }
}
