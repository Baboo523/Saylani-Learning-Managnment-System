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
function abc()
{
    firebase.database().ref(`/Student`).once('value', (snapshot) => 
    {
        const data11 = snapshot.toJSON()
        console.log(data11)
        const value = Object.values(data11)
        console.log(value)

            value.map((v,i)=>{
                console.log(v.item_img)
              document.getElementById('show_dish').innerHTML += `   <div class="col-lg-4 col-md-6 col-sm-12 col-12">
                <div class="card" style='margin-top:25px'>
                  
                    <div class="card-body">
                        <h5 class="card-title">Student Name: ${v.Name}</h5>
                        <p class="card-text">Email : ${v.Email} </p>
                        <h5 class="card-title">Password : ${v.Password}</h5>
                        <h5 class="card-title">Type: ${v.type} </h5>
                        <a href="#" class="btn btn-danger" id=${v.uid} onclick='dele(this)' >Delete</a>
                    </div>
                </div>
            </div>`
            })
    })
}

dele=(e)=>{
    console.log(e.id)
    firebase.database().ref('/Student').child(e.id).remove()
    window.location.reload()
}