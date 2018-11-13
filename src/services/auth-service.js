import firebase, { auth } from '../firebase';

export const AuthService = {
  
  createSession: (data)=>{
    let dataString = JSON.stringify(data);
    let dataNew = btoa(dataString);
    localStorage.setItem('session', dataNew );
  },
  destroySession: ()=>{
    localStorage.removeItem('session');
  },
  checkSession: (funres)=>{
    firebase.auth().onAuthStateChanged( firebaseUser => {
      if(firebaseUser){
        funres(firebaseUser);
      }else{
        funres(false);
      }
    })
  },
  checkSessionOff: ( funres )=>{
    if(localStorage.getItem('session')){
      let dataString = localStorage.getItem('session');
      let data = JSON.parse(atob(dataString));
      //funres(data);
      return data;
    }else{
      //funres(false);
      return false;
    }
  },
  createUser: (email, password, funres, funerr)=>{
    const promise = auth.createUserWithEmailAndPassword(email,password);
    promise
      .then( (firebaseUser)=>funres(firebaseUser))
      .catch( (error)=>funerr(error))
  },
  signIn:(email,password, funres, funerr)=>{
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise
      .then( firebaseUser=>funres(firebaseUser))
      .catch( error=>funerr(error) )
  },
  signOut: ()=>{
    auth.signOut();
    AuthService.destroySession()
  }
}