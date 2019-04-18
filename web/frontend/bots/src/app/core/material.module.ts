import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxTweetModule } from "ngx-tweet";
import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatToolbarModule, MatSliderModule, MatInputModule, MatSlideToggleModule, MatDatepickerModule,
    MatSelectModule, MatPaginatorModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
        MatListModule, MatSliderModule, MatInputModule, NgxTweetModule, MatSlideToggleModule, MatDatepickerModule,
        MatSelectModule, MatPaginatorModule],
    exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
        MatListModule, MatSliderModule, MatInputModule, NgxTweetModule, MatSlideToggleModule, MatDatepickerModule,
        MatSelectModule, MatPaginatorModule],
})
export class CustomMaterialModule { }