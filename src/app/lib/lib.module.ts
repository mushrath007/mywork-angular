import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './image/image.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { FloatingSwitchesComponent } from './floating-switches/floating-switches.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    declarations: [
      ImageComponent,
      ScrollToTopComponent,
      TabsComponent,
      TabComponent,
      FloatingSwitchesComponent
  ],
  exports: [
    ImageComponent,
    ScrollToTopComponent,
    TabsComponent,
    TabComponent,
    FloatingSwitchesComponent
  ],
    providers: [
    ]
})
export class LibraryModule { }
