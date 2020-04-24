import { Component, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { TitleService } from './title.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title$: Observable<string>;
  title: string;
  navigationOpened: boolean = true;
  dateValues = [
    { value: 'Yearly', viewValue: 'Yearly' },
    { value: 'Monthly', viewValue: 'Monthly' },
    { value: 'Last Year', viewValue: 'Last Year' }
  ];
  selected = "Last Year"
  navigationList = [
    { title: 'Dashboard', link: 'home', icon: 'dashboard' },
    { title: 'Payments', link: 'payments', icon: 'attach_money' },
    { title: 'Files', link: 'files', icon: 'file_copy' },
    { title: 'Suppliers', link: 'suppliers', icon: 'person_pin' },
    { title: 'Reporting', link: 'reporting', icon: 'pie_chart', isMulti: true },
    { title: 'Report Builder', link: 'report', icon: 'image_search', parent: 'reporting', isVisible: false },
    { title: 'Existing Report', link: 'existingReport', icon: 'insert_chart', parent: 'reporting', isVisible: false },
    { title: 'Profile', link: 'profile', icon: 'person' },
    { title: 'Configuration', link: 'configuration', icon: 'settings', isMulti: true },
    { title: 'Payment', link: 'paymentConfig', icon: 'money', parent: 'configuration', isVisible: false },
    { title: 'Files', link: 'filesConfig', icon: 'create_new_folder', parent: 'configuration', isVisible: false }
  ];
  navList = [
    {
      heading: 'Dashboard',
      icon: 'dashboard',
      link: '/dashboard',
      pages: []
    },
    {
      heading: 'Main Heading',
      icon: 'settings',
      link: '/settings',
      pages: [
        {
          title: 'Subpage',
          link: '/settings/advanced',
          icon: ''
        }
      ]
    }
  ]

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

  menuClicked(listItem) {
    this.navigationList
      .filter((item) => item.parent === listItem.link)
      .forEach((item) => item.isVisible = !item.isVisible)
  }
}
