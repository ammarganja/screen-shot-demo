import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name = 'Kissht';
  url: any
  KisshtHtml: any;
  constructor(private http: HttpClient,
    private sanitizer: DomSanitizer) {

  }
  isLoading = false;
  error_msg: any;

  buttnClick() {
    this.isLoading = true;
    this.error_msg = '';
    //https://www.webcluesinfotech.com/
    // this.http.get(this.url,{responseType:'text'}).subscribe(res=>{
    //   this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res) as ElementRef;
    //   console.log(this.KisshtHtml.nativeElement);
    // })
    this.http.post('http://localhost:3100/screenshot', { URI: this.url, responseType: 'json' }).subscribe(res => {
      // this.KisshtHtml = this.sanitizer.bypassSecurityTrustHtml(res) as ElementRef;
      console.log(res);
      this.url = '';
      this.error_msg = 'success'
      this.isLoading = false;
    }, error => {
      console.log(error);
      this.error_msg = error.error.message;
      this.isLoading = false;
    });
  }

  ngOnInit() {

  }


}
