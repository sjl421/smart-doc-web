import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../share/modal/modal.service';
import { SiteAddComponent } from '../site-add/site-add.component';

@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss']
})
export class SiteListComponent implements OnInit {

  constructor(private modal: ModalService) { }

  ngOnInit() { }

  openSiteAddModal() {
    this.modal.open(SiteAddComponent);
  }

}