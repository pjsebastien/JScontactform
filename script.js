//Unique case treatment
document.querySelector("#mailConfirm").addEventListener("input", function(e){
//"this" is the " addeventlistener " defined before
// if the value is different than the email input
   if(this.value != document.querySelector("#email").value){
      //We add to html the text bellow
      document.querySelector("p").innerHTML = "Les 2 adresses mails ne correspondent pas !"
   } else {
      //Else, we add to html an empty "p"
      document.querySelector("p").innerHTML = "";
   }
})
//Same for password and passwordConfirm
document.querySelector("#passwordConfirm").addEventListener("input", function(e){
   if(this.value != document.querySelector("#password").value){
      document.querySelector("p").innerHTML = "Les 2 mots de passe ne correspondent pas !"
   } else {
      document.querySelector("p").innerHTML = "";
   }
})

//We collect all the name form attribute for the form "inscription" in html
document.forms["inscription"].addEventListener("submit", function(e){
   
   var erreur ;
   var inputs = this;
   //General error case
   
   for (var i = 0 ; i<inputs.length ; i++){
      if(!inputs[i].value){
         inputs[i].style.borderColor="red";
         erreur = "Veuillez renseigner tous les champs !";
         
         //With break, the loop stop at the first error
      if(inputs[i].value===document.forms["inscription"]) {
         inputs[i].style.borderColor="green";
      }  
      }
   } 


   
   if(erreur){
      //If there is an error, we cancel the preventdefault which is to sent the form
      e.preventDefault();
      //the error message will appear on html
      document.querySelector("p").innerHTML = erreur;
      
      return false;
   }else {
      //if there is no error, a confirm message will appear and the default comportment will be done (sent form)
      alert( "Formulaire envoyé !");
   }
   
})