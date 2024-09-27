import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { Plan } from 'src/app/model/plan';
import { Sentence } from 'src/app/model/sentence';
import { GetLocalDataService } from 'src/app/service/get-local-data/get-local-data.service';
import { HttpService } from 'src/app/service/http/http.service';

@Component({
  selector: 'app-sentence',
  templateUrl: './sentence.component.html',
  styleUrls: ['./sentence.component.css']
})
export class SentenceComponent implements OnInit {
  constructor(private global: HttpService) {

  }
  ngOnInit(): void {

  }
  sentence: Sentence[] = new Array()
  // 获取本地json文件中的数据，并上传到服务器中
  // onClick() {
  //   // 获取数据
  //   this.global.get_url<Sentence[]>("assets/json/say.json").subscribe({
  //     next: (data) => {
  //       this.sentence = data;
  //       // 上传数据
  //       data.forEach(item => {
  //         this.global.post_url("http://localhost:5172/v1/api/Sentence/sentence", {
  //           "content": item.content,
  //           "uId": 0,
  //           "createTime": item.createTime
  //         }).subscribe({
  //           next: (data) => {
  //             console.log(data)
  //           }
  //         })
  //       });
  //     }
  //   })
  // }
  getSentences(){
    this.global.get_url("http://localhost:5172/v1/api/Sentence/sentence")
  }
}
