import { Component, ChangeDetectorRef } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { TitleService } from './title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title$: Observable<string>;
  title: string;
  navigationOpened: boolean = true;
  dateValues = [
    { value: 'Last Year', viewValue: 'Last Year' },
    { value: 'Last 3 Years', viewValue: 'Last 3 Years' },
    { value: 'Last 5 Years', viewValue: 'Last 5 Years' }
  ];
  typesOfShoes: string[] = ['Dashboard', 'Payment', 'Sunppliers', 'Charts', 'Graphs'];

  constructor(
    private titleService: TitleService,
    private cdRef: ChangeDetectorRef,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      "navigation-placeholder",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/placeholder-light.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "notification-received",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/images/notification-received.svg")
    );
  }

  ngOnInit() {
    this.titleService.getTitle().subscribe(value => {
      this.title = value;
      this.cdRef.detectChanges();
    });
  }
}
