import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: Post[];
    loading = false;

    constructor(
        private meta: Meta,
        private postService: PostService) {
            this.meta.addTags([
                { name: 'description', content: '谭一雄的文章集' },
                { name: 'author', content: '谭一雄,Tan Yixiong' },
                { name: 'keywords', content: '谭一雄,博客,技术,Java,数据分析,金融,武汉大学,复旦大学,摩根史坦利' }
            ]);
        }

    getPosts(): void {
        this.postService
            .getPosts()
            .then(posts => {
                this.posts = posts;
                this.loading = false;
            });

        setTimeout(() => {
            if (this.posts === null) {
                this.loading = true;
             }
        }, 500);
    }

    ngOnInit(): void {
        if (!this.posts) {
            this.posts = null;
            this.getPosts();
        }
    }
}
