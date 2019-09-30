
//Add below script in your index.html page of your project.

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
 <script src="https://www.gstatic.com/firebasejs/5.5.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.5.0/firebase-messaging.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.5.2/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/3.5.2/firebase-database.js"></script>


<script type="text/javascript">

// Please use your own firebaseConfig provided by firebase for your site.
 var firebaseConfig = {
	    apiKey: "<FIREBASE-APIKEY",
	    authDomain: "<AUTH-DOMAIN>",
	    databaseURL: "<DB-URL>",
	    projectId: "<PROJECT-ID>",
	    storageBucket: "<BUCKET>",
	    messagingSenderId: "<SENDER-ID",
	    appId: "APP-ID"
	  };
	  firebase.initializeApp(firebaseConfig);
	  const messaging = firebase.messaging(); 

	  Notification.requestPermission().then((permission) => {
		  if (permission === 'granted') {
		    console.log('Notification permission granted.');
		    if(isTokenSentToServer()){
				   console.log('Token already sent ');
			   }else{
				   getRegisteredToken();
			   }
		  } else {
		    console.log('Unable to get permission to notify.');
		  }
		});
	  
	  function getRegisteredToken() {
			messaging.getToken().then((currentToken) => {
			  if (currentToken) {
				    saveToken(currentToken);  
			     sendTokenToServer(currentToken); 
			    //updateUIForPushEnabled(currentToken);
			  } else {
			    console.log('No Instance ID token available. Request permission to generate one.');
			    //updateUIForPushPermissionRequired();
			     setTokenSentToServer(false); 
			  }
			}).catch((err) => {
			  console.log('An error occurred while retrieving token. ', err);
			   setTokenSentToServer(false); 
			});
			
		}
	  
	  function sendTokenToServer(currentToken) {
		    if (!isTokenSentToServer()) {
		      console.log('Sending token to server...');
		      setTokenSentToServer(true);
		    } else {
		      console.log('Token already sent to server so won\'t send it again ' +
		          'unless it changes');
		    }
		  }
	  
	  function setTokenSentToServer(sent) {
		    window.localStorage.setItem('sentToServer', sent ? '1' : '0');
		  }
	  
	  function isTokenSentToServer() {
		    return window.localStorage.getItem('sentToServer') === '1';
		  }
	  
	  function getToken(currentToken) {
		
		  return currentToken;
	}
 
	     function saveToken(currentToken) {
	    	 $.ajax({
	             type: "POST",
	             url: "https://api.cronberry.com/cronberry/api/campaign/register-audience",
	             dataType: "json",
	             headers: {
	            	    'Accept': 'application/json',
	            	    'Content-Type': 'application/json'
	            	},
	             data:JSON.stringify({
	            	 paramList: [
	 			        {
	 			            paramKey: "web_fcm_token",
	 			            paramValue:currentToken
	 			        }
	 			    ],
	 			    apiKey: "<CRONBERRY-APIKEY>",
	 			    audienceId: "<Audience ID>" 
	 			    //If you do not have audience id
	 			    //Ex. Before login case than send any unique value here like current timestamp/epoch(new Date().getTime())time 
	             }),
	             success: function (data) {
	            	 console.log("success");
	             },
	             error: function () {
	            	 console.log("error");
	             }
	         });
	   }  
	    
	   
</script>