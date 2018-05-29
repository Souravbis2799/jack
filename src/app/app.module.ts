import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { abcComponent} from  './abc';
import { AppComponent } from './app.component';
import { btsComponent} from  './bts';
import { defComponent} from  './def';
import { stuComponent} from  './stu';
import { pqrComponent} from  './pqr';


import { RouterModule} from  '@angular/router';

const routes = [
  { path : 'abc', component : abcComponent },
  { path : 'bts', component : btsComponent },
  { path : 'def', component : defComponent },
  { path : 'stu', component : stuComponent },
  { path : 'pqr', component : pqrComponent },
]




@NgModule({
  declarations: [
    AppComponent,abcComponent,btsComponent,defComponent,stuComponent,pqrComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  componentName: 'AppComponent'
}

