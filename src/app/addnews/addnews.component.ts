import { Component } from '@angular/core';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent {

  id=""
  name=""
  author=""
  title=""
  description=""
  url=""
  urlToImage=""
  publishedAt=""
  content=""

  readvalues=()=>

{
  let data :any ={"id":this.id,
  "name":this.name,
  "author":this.author,
  "title":this.title,
  "description":this.description,
  "url":this.url,
  "urlToImage":this.urlToImage,
  "publishedAt":this.publishedAt,
  "content":this.content
  }
  console.log(data)


}
}
