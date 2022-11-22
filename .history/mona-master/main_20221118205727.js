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
  
  
  imgname1 = '18';
  firebase.database().ref('Pictures/'+imgname1).on('value', function(snapshot){
  document.getElementById('1').src = snapshot.val().Link;
  });
  
  imgname2 = '19';
  firebase.database().ref('Pictures/'+imgname2).on('value', function(snapshot){
  document.getElementById('retrive2').src = snapshot.val().Link;
  });
  
  imgname3 = '20';
  firebase.database().ref('Pictures/'+imgname3).on('value', function(snapshot){
  document.getElementById('retrive3').src = snapshot.val().Link;
  });
  