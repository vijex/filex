import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class VaultService {
  constructor(private http: HttpClient) {}

  uploadFile(files: any) {
    const apiUrl = 'http://localhost:5000/upload';
    const headersOptions = {
      headers: new HttpHeaders({
        // 'Content-Type': 'multipart/form-data'
      })
    };
    const body = new FormData();
    body.append('file', files);
    return this.http.post(apiUrl, body, headersOptions);
  }
}
