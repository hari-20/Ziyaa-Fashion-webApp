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
  document.getElementById('Address').innerHTML = snapshot.val().Add;
  });

  firebase.database().ref('Pictures/').on('value', function(snapshot){
    document.getElementById('Address1').innerHTML = snapshot.val().Add;
    });

    var messagesRef = firebase.database().ref('messages');

    // Listen for form submit
    document.getElementById('contactform').addEventListener('submit', submitForm);
    
    // Submit form
    function submitForm(e){
      e.preventDefault();
    
      // Get values
      var name = getInputVal('name');
      var email = getInputVal('email');
      var phone = getInputVal('phone');
      var message = getInputVal('message');
    
      // Save message
      saveMessage(name, email, phone, message);
    
      // Show alert
      document.getElementById('.#snackbar {
        visibility: hidden;
        min-width: 250px;
        margin-left: -125px;
        background-color: #ed489d;
        color: rgb(255, 255, 255);
        border-radius: 4px;
        text-align: center;
        padding: 16px;
        position: fixed;
        z-index: 1;
        left: 50%;
        bottom: 30px;
        font-size: 17px;
      }
      
      #snackbar.show {
        visibility: visible;
        -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
      }
      ').style.display = 'block';
    
      // Hide alert after 3 seconds
      setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
      },3000);
    
      // Clear form
      document.getElementById('contactform').reset();
    }
    
    // Function to get get form values
    function getInputVal(id){
      return document.getElementById(id).value;
    }
    
    // Save message to firebase
    function saveMessage(name, email, phone, message){
      var newMessageRef = messagesRef.push();
      newMessageRef.set({
        name: name,
        email:email,
        phone:phone,
        message:message
      });
    }