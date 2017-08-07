import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { LayoutComponent } from './layout/layout.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal/modal.service';
import { TreeMenuComponent } from './tree-menu/tree-menu.component';
import { PaginationComponent } from './pagination/pagination.component';
import { TreeMenuService } from './tree-menu/tree-menu.service';
import { AffixDirective } from './affix.directive';
import { RollDirective } from './roll.directive';
import { TopDirective } from './top.directive';
import { FileUploadModule } from 'ng2-file-upload';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LayoutComponent, ModalComponent, TreeMenuComponent, PaginationComponent, AffixDirective, RollDirective, TopDirective],
  exports: [LayoutComponent, ModalComponent, TreeMenuComponent, PaginationComponent, AffixDirective, RollDirective, TopDirective, FileUploadModule, CommonModule, HttpModule],
  providers: [ModalService, TreeMenuService]
})
export class ShareModule { }