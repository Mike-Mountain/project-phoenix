import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({
      'projectId': 'project-mike-92',
      'appId': '1:950461842023:web:d1cd0b3c0ed4e5a15d0ac2',
      'storageBucket': 'project-mike-92.appspot.com',
      'apiKey': 'AIzaSyAmoNdUaNO4aR0s71ncvl0Bxz57EYUORPE',
      'authDomain': 'project-mike-92.firebaseapp.com',
      'messagingSenderId': '950461842023',
      'measurementId': 'G-RNBQKSMDGM'
    }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore()))
  ]
};
