import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
    BsDropdownModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
    }),
  ],
  exports: [FontAwesomeModule, BsDropdownModule, ToastrModule],
})
export class SharedModule {}

// FontAwesomeModule,
// BsDropdownModule,
// AppRoutingModule,
// ToastrModule.forRoot({
//   positionClass: 'toast-bottom-right',
// }),
