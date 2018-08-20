// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  urlApi : 'http://localhost:8080',
  production: false
};

export const firebaseEnvironment = {
  firebase: {
    apiKey: 'AIzaSyDZM6h-H8Trwu43f52wuSTYRLK_4MVDk6o',
    authDomain: 'badenblog-69509.firebaseapp.com',
    databaseURL: 'https://badenblog-69509.firebaseio.com',
    projectId: 'badenblog-69509',
    storageBucket: 'badenblog-69509.appspot.com',
    messagingSenderId: '854636736911'
  }
};
