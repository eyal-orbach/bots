import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NgxTweetModule } from "ngx-tweet";
import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, 
    MatToolbarModule, MatSliderModule, MatInputModule, MatSlideToggleModule, MatDatepickerModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
        MatListModule, MatSliderModule, MatInputModule, NgxTweetModule, MatSlideToggleModule, MatDatepickerModule],
    exports: [CommonModule, MatButtonModule, MatToolbarModule, MatNativeDateModule, MatIconModule, MatSidenavModule, 
        MatListModule, MatSliderModule, MatInputModule, NgxTweetModule, MatSlideToggleModule, MatDatepickerModule],
})
export class CustomMaterialModule { }