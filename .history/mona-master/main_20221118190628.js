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
  
  
      imgname1 = 'curve';
  firebase.database().ref('Pictures/'+imgname1).on('value', function(snapshot){
  document.getElementById('retrive2').url = snapshot.val().Link;
  });
  