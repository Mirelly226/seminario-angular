import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class NewsFirebaseService {

  constructor(private firestore: AngularFirestore) {
  }

  getNews() {
    return this.firestore.collection('news').snapshotChanges();
  }

  getNew(id: string) {
    return this.firestore.collection('news').doc(id).snapshotChanges();
  }
}
