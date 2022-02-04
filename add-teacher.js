const firebaseConfig = 
{
    apiKey: "AIzaSyC7khT1f-S_fFVZlH19Y4HGJrS73qnyxek",
    authDomain: "smit-eportal.firebaseapp.com",
    projectId: "smit-eportal",
    storageBucket: "smit-eportal.appspot.com",
    messagingSenderId: "890060713831",
    appId: "1:890060713831:web:f98337fe6ec84d47e609c2"
};
firebase.initializeApp(firebaseConfig)
var KEY = firebase.database().ref('todos').push().getKey()
console.log(KEY)

// var obj = {
//     email : "smit786@gmail.com",
//     password : "abc123"
// }

// firebase.database().ref("/Admin").push(obj)
const sig_up =()=>
{
    var name = document.getElementById('p').value
    var email = document.getElementById('email').value
    var password = document.getElementById('password').value
    console.log(name,email,password)
    if(name=='' || email=='' ||password=='')
    {
        alert("Enter Correct Value")
    }
    else
    {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((result)=>
        {
            var user = result.user
            console.log(user.uid)
            var obj = 
            {
                Name : name,
                Email : email,
                Password :password,
                uid : user.uid,
            }
            firebase.database().ref(`/teacher`).child(user.uid).set(obj)
        })
        .catch((err)=>
        {
            console.log(err)
        })
    }
}
