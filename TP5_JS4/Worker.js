 /**Les variables*/
 const xhr = new XMLHttpRequest();
 var intervalID;
 var max = 500;

 intervalID = setInterval(getCoordinates, 1000);

 /**Fonction */
 function getCoordinates()
 {
     /**On récupère les coordonnées du cercle*/
     window.alert("On récupère les coordonnées du cercle");
     let url = "https://stwom.herokuapp.com/"+max;
     xhr.open("GET",url);
     xhr.send();
 }

 /**Les événements*/
 xhr.onreadystatechange = function()
 {
     if(this.readyState == this.DONE && this.status == 200)
     {
         var response = JSON.parse(this.responseText);
         this.postMessage(response); 
         window.alert("Message envoyé par worker");
     }
 };
