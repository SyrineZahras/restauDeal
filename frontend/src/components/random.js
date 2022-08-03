import React from 'react'

function Random() {

   var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
   var string_length = 5;
   var random_string = "";
   for(var i = 0; i < string_length; i++){
     var randomString = Math.floor(Math.random() * characters.length);
     random_string += characters.substring(randomString,randomString+1);}


  return (
    <div>   
    Votre Code Promo:  {random_string}
    </div>
  )
}

export default Random