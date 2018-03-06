import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { Post } from './post';
import { PostService } from './post.service';

// keep transferstate to avoid duplicate http call.
// e.g. if the data has been returned when SSR, then there is no need to call from browser.
const POSTDETAIL_KEY = makeStateKey('postDetail');

@Component({
    templateUrl: './postDetail.component.html',
    styleUrls: ['./postDetail.component.css']
})
export class PostDetailComponent implements OnInit {
    post: Post;
    id: number;

    constructor(
        private route: ActivatedRoute,
        private postService: PostService,
        private state: TransferState) { }

    getPostDetail(id: number): void {
        this.postService
            .getPostDetail(id)
            .then(post => {
                this.post = post;
                this.state.set(POSTDETAIL_KEY, post as any);
            });
    }

    ngOnInit(): void { }

    ngDoCheck(): void {
        var id_para = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        if (this.id !== id_para) {
            this.id = id_para;
            console.log(this.id);
            this.post = this.state.get(POSTDETAIL_KEY, null as any);
            this.getPostDetail(this.id);
        }
    }
}
