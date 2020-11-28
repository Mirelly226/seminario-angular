import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewModel} from '../model/new.model';
import {NewsFirebaseService} from '../services/news-firebase.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  static URL = 'item/:id';
  public id: string;
  public new: NewModel;

  constructor(private route: ActivatedRoute,
              private newsFirebaseService: NewsFirebaseService) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.new = {id: null, detail: null, photo: null, resume: null, title: null};
  }

  ngOnInit(): void {
    this.synchronizeFirebase();
  }

  synchronizeFirebase(): void {
    this.newsFirebaseService.getNew(this.id).subscribe(
      data => {
        this.new = data.payload.data();

      });

  }

}
