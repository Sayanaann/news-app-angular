import { Component } from '@angular/core';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent {

  id=""
  name=""
  title=""
  description=""
  url=""
  urlToImage=""
  publishedAt=""
  content=""

  readvalue=()=>

{
  let data :any ={"id":this.id,
  "name":this.name,
  "title":this.title,
  "description":this.description,
  "url":this.url,
  "urlToImage":this.urlToImage,
  "publishedAt":this.publishedAt,
  "content":this.content
}
}
}
