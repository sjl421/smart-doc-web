import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }

  getSiteAndMan(siteId, manId) {
    return this.http.get(`/open/siteAndMan/${siteId}/${manId}`);
  }

  getArticle(id) {
    return this.http.get(`/open/article/${id}`);
  }
}