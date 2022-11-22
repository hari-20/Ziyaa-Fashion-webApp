// import { getDatabase, ref, get } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAnP4Gl9eCxIwp7xVspDH-6a4PUJbbhiKk",
    authDomain: "test-image-64bee.firebaseapp.com",
    projectId: "test-image-64bee",
    storageBucket: "test-image-64bee.appspot.com",
    messagingSenderId: "45858459106",
    appId: "1:45858459106:web:2747bb28556ec2c398bdbb",
    measurementId: "G-DFW867H26R"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // function addAddress(address){
  //   var add = document.getElementById('Address');
  //   add.innerHTML=''+address;
  // }

  // function FetchData(){
  //   firebase.database().ref('Pictures').once('value', function(snapshot){
  //     snapshot.forEach(
  //       function(Childsnapshot){
  //         let address = Childsnapshot.val().Name;
  //         addAddress(address);
  //       }
  //     );
  //   });
  // }
  
  imgname1 = 'mens';
  firebase.database().ref('Pictures/'+imgname1).on('value', function(snapshot){
  document.getElementById('m-img').src = snapshot.val().Link;
  });
  
  imgname2 = 'womens';
  firebase.database().ref('Pictures/'+imgname2).on('value', function(snapshot){
  document.getElementById('w-img').src = snapshot.val().Link;
  });


  firebase.database().ref('Pictures/').on('value', function(snapshot){
  document.getElementById('Address,Address1').innerHTML = snapshot.val().Add;
  });


// window.addEventListener('load', FetchData);
// var database = firebase.database()
// function getuser(){
//   var add_ref = database.ref('Pictures/'+'image20')
//   add_ref.once('value', function(snapshot){
//     var data = snapshot.val().Name;

//     console.log(data)
    
//   })
// }

  // imgname3 = 'image20';
  // firebase.database().ref('Pictures/'+imgname3).on('value', function(snapshot){
  // document.getElementById('img-20').src = snapshot.val().Link;
  // });
  
// var storage = firebase.storage();
// var pathReference = storage.ref('Pictures/image20');

// pathReference.child('Pictures/image20').getDownloadURL().then(function(url) {
//   // `url` is the download URL for 'images/stars.jpg'

//   var img = document.getElementById('img-20');
//   img.src = url;
// }).catch(function(error) {
//   // Handle any errors
// });