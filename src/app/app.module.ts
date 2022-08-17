import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { registerLocaleData } from '@angular/common';
import localFr from '@angular/common/locales/fr';

/* Firebase default importation */
// import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
// import { environment } from '../environments/environment';
// import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
/* end of Firebase default importation */

/* Firebase other and better importation (compatibility)*/
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
// import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
/* end of Firebase other and better importation */

registerLocaleData(localFr);
@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,

    /* Firebase default importation */
    // provideFirebaseApp(() => initializeApp(environment.firebase)),
    // provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    // provideFirestore(() => getFirestore()),
    /* end of Firebase default importation */

    /* Firebase other and better importation */
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    // AngularFireDatabaseModule,
    AngularFirestoreModule,
    /* end of Firebase other and better importation */
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
