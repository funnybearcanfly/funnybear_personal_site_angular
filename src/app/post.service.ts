import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serviceUrl = 'https://www.tanyixiong.com:8443/siteService/api/';

    constructor(private http: Http) { }

    public getPosts(): Promise<Post[]> {
        return this.http.get(this.serviceUrl + "listAllPosts")
            .toPromise()
            .then(response => response.json() as Post[])
            .catch(this.handleError);
    }

    public getPostDetail(id: number): Promise<Post> {
        return this.http.get(this.serviceUrl + "getPostDetail/" + id)
            .toPromise()
            .then(response => response.json() as Post)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}