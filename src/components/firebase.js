import { initializeApp } from "firebase/app";
import {getFirestore,collection, addDoc,getDoc,getDocs,doc, deleteDoc,updateDoc,setDoc, initializeFirestore} from 'firebase/firestore'
import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";
import { getAuth,sendPasswordResetEmail,signInWithPopup,GoogleAuthProvider  } from "firebase/auth";
import {getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA3zSCSSgp2DRI_33czjrfj1CPrPEC1iCw",
  authDomain: "aditya-project-bc0a6.firebaseapp.com",
  projectId: "aditya-project-bc0a6",
  storageBucket: "aditya-project-bc0a6.appspot.com",
  messagingSenderId: "813005587723",
  appId: "1:813005587723:web:8f1e501dbb38a16a2e4e0e",
  measurementId: "G-R5VFYEBH8C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const storage = getStorage(app);
export const deleteHandler=async(id)=>{
  console.log("Delete pressed")
  await deleteDoc(doc(db, "Questions", id));
 }

export   const updateQuestion=async(id,answer)=>{
  const docRef = doc(db, "Questions", id);
const docSnap = await getDoc(docRef);
   const currAns=docSnap.data().Answer
   currAns.push(answer)

   await updateDoc(doc(db, "Questions", id),{
     Answer:currAns
   });
   console.log("Update Done")
 }
 export   const GetPlan=async(email)=>{
  const docRef = doc(db, "users", email);
  const docSnap = await getDoc(docRef);
  // const val=docSnap.data()?docSnap.data().Subscription.PlanType:""
  // return val? val:"null"
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
  return  docSnap.data().Subscription.PlanType
} else {
  // docSnap.data() will be undefined in this case
  console.log("No such document!");
}
 }

export   const updateUser=async(id,type)=>{
  console.log("Making Subscription")
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  today =  yyyy+ '-' + mm + '-' +dd ;
  const docRef = doc(db, "users", id);
   await updateDoc(docRef,{
     Subscription:{PlanDate:today,PlanType:type}
   });

 }
 export const updateUserPassword = async (email) => {
  sendPasswordResetEmail(auth, email).then(() => {
    console.log('sent')
  })
}
 export const storeArticledata=async(Title,Abstract,ImageUrl,ArticleText,Tags,Author)=>{
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); 
  var yyyy = today.getFullYear();
  today =  yyyy+ '-' + mm + '-' +dd ;
    const result=await addDoc(collection(db,'Articles'),{
      Title,
      Abstract,
      ImageUrl,
      ArticleText,
      Author:Author,
      Tags,
      Date:today
    });
    console.log(result);
  }
  export const GetArticles=async()=>{
    let obj={}
    let arr=[]
    const querySnapshot = await getDocs(collection(db, "Articles"));
    querySnapshot.forEach((doc) => {
      obj={
        id:doc.id,
        Title:doc.data().Title,
        Abstract:doc.data(). Abstract,
        ArticleText:doc.data().ArticleText,
        Author:doc.data().Author,
        Tags:  doc.data().Tags,
        Date:  doc.data().Date
      }
      arr.push(obj);
    });   
     return arr;
  }
  export const storeQuestiondata=async(Title,Problem,Tags,Code,Author,userId)=>{
    var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today =  yyyy+ '-' + mm + '-' +dd ;
    const result=await addDoc(collection(db,'Questions'),{
      Title,
      Problem,
      Tags,
      Code,
      Answer:[],
      Author:Author,
      userId,
      Date:today
    });
  }
  
  export const GetQuestions=async()=>{
    // console.log(`Get Data`);
    let obj={}
    let arr=[]
    const querySnapshot = await getDocs(collection(db, "Questions"));
    querySnapshot.forEach((doc) => {
      obj={
        id:doc.id,
        Title:doc.data().Title ,
        Problem:doc.data(). Problem,
        Tags:  doc.data().Tags,
        Answer:  doc.data().Answer,
        Author:doc.data().Author,
        userId:doc.data().userId,
        Date:  doc.data().Date,
        Code:doc.data().Code
      }
      arr.push(obj);
    });   
     return arr;
  }
  const provider = new GoogleAuthProvider()
provider.setCustomParameters({
  prompt: 'select_account'
})
  export const signInWithGoogle = () => signInWithPopup(auth, provider)
export const saveGoogleUser = async (email, displayName, createTime) => {
  const userDocRef = doc(db, 'users', email)
  const docSnap = await getDoc(userDocRef);
  if(docSnap.data())console.log("NO Update",email)
  else{
    console.log("Do Update",email)
    await setDoc(userDocRef, {
      email,
      displayName,
      createTime,
      Subscription:{PlanDate:'',PlanType:''}
    })
  }
}
  export const storeuserdata=async(displayName,email,password)=>{
    const result=await setDoc(doc(db, "users", email),{
      displayName,
      email,
      password,
      Subscription:{PlanDate:'',PlanType:''}
    });
    console.log(result);
  }
  const analytics=getAnalytics(app);
  const auth=getAuth();
  export {auth, app, db}