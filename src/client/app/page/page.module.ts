import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { PageComponent } from './page.component';
import { SharedModule } from '../shared/shared.module';
import { NameListService } from '../shared/name-list/name-list.service';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    SharedModule
  ],
  declarations: [PageComponent],
  exports: [PageComponent],
  providers: [NameListService]
})
export class PageModule { }

