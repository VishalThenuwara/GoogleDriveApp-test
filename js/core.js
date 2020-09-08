//30577338934-gr44qm3k4vga34bc2lkrmfbsjbuidkgd.apps.googleusercontent.com client id
//K8GwJehD8DAYfIkaEWUQMClR Client Sect

$(document).ready(function(){
     
     // client id of the project

     var clientId = "34840218804-6tu4spu6a7121pk4gbt09tkbb466ecfa.apps.googleusercontent.com";

     // redirect_uri of the project

     var redirect_uri = "http://192.168.64.2.xip.io/DriveSubmIt/modules/submit.html";
   
     // scope of the project

     var scope = "https://www.googleapis.com/auth/drive";

     // the url to which the user is redirected to

     var url = "";


     // this is event click listener for the button

     $("#login").click(function(){

        // this is the method which will be invoked it takes four parameters

        signIn(clientId,redirect_uri,scope,url);

     });

     function signIn(clientId,redirect_uri,scope,url){
      
        // the actual url to which the user is redirected to 

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";

        // this line makes the user redirected to the url

        window.location = url;




     }



});