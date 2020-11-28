import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NewModel} from '../model/new.model';
import {NewsFirebaseService} from '../services/news-firebase.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  static URL = 'list';
  public news: NewModel[];

  constructor(private rout: Router, private newsFirebaseService: NewsFirebaseService) {
    this.news = [];
  }

  ngOnInit(): void {
    this.synchronizeFirebase();
  }

  navigateToItem(item: NewModel): void {
    this.rout.navigate(['/item/' + item.id]);
  }

  synchronizeFirebase(): void {
    this.newsFirebaseService.getNews().subscribe(
      data => {
        data.forEach(item => {
          const datos: NewModel = item.payload.doc.data();
          datos.id = item.payload.doc.id;
          this.news.push(datos);

        });

      }
    );

  }

}
