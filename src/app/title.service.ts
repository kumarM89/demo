import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  public title: BehaviorSubject<string> = new BehaviorSubject('Home');
  constructor() { }

  setTitle(value: string): void {
    this.title.next(value);
  }

  getTitle(): Observable<string> {
    return this.title.asObservable();
  }
}
