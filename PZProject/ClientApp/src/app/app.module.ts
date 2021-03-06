import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupCreatorComponent } from './groupCreator/groupCreator.component';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 
import { GroupEditComponent } from './group-edit/group-edit.component';
import { GroupUsersDisplayComponent } from './group-users-display/group-users-display.component'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { NotesComponent } from './notes/notes.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { NoteEditComponentComponent } from './note-edit-component/note-edit-component.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AttachmentsEditComponent } from './attachments-edit/attachments-edit.component';

const AngularMaterial = [
  MatProgressSpinnerModule,
  MatExpansionModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    GroupsComponent,
    GroupCreatorComponent,
    GroupEditComponent,
    GroupUsersDisplayComponent,
    NotesComponent,
    NoteCreatorComponent,
    NoteEditComponentComponent,
    AttachmentsEditComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularMaterial,
    ToastModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'groupCreator', component: GroupCreatorComponent },
      { path: 'group-users-display', component:  GroupUsersDisplayComponent},
      { path: 'group-edit/:id', component:  GroupEditComponent},
      { path: 'groups/:id/notes', component:  NotesComponent},
      { path: 'groups/:id/notes/create', component:  NoteCreatorComponent},
      { path: 'groups/:id/notes/edit/:id2', component:  NoteEditComponentComponent},
      { path: 'groups/:id/notes/attachment/:id3', component:  AttachmentsEditComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
