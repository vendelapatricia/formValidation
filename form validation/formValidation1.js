"use strict";
// all kod är inspirerad från föreläsningar & föreläsningsbilder om inte annat anges

function validateForm() { // funktion som kontrollerar formuläret

    try {
        // variabler som vi använder i if och else-satserna
        var matar;
        var meny;
        var modell;
        var checkbox;
        var textbox;


        meny = document.getElementById("cbofabrikat"); //hämtar cbofabrikats Id
        if (meny.value === "saknas") {                 // värdet är inte ett aktivt val
            meny.focus();                             //sätter meny till focus
            throw new Error(meny.getAttribute("title")); // felmeddelande om man inte har fyllt i något av bilfabrikaten
        }

        modell = document.getElementById("txtmodell");  //hämtar txtmodells Id
        if (modell.value === "") {
            modell.focus();
            throw new Error(modell.getAttribute("title"));  //felmeddelande om man inte har fyllt i modell
        }

        matar = document.getElementById("txtmatarstallning"); //hämtar txtmatarstallnings Id
        if (matar.value === "") {
            matar.focus();
            throw new Error(matar.getAttribute("title"));
        }
        if (isNaN(matar.value)) { // isNan kollar så att det är siffror, måste vara siffror.
            matar.focus();
            throw new Error(matar.getAttribute("title")); // felmeddelande om man inte skriver i något alls eller annat än siffror
        }
//https://teamtreehouse.com/community/how-do-i-check-if-a-checkbox-is-checked-using-pure-javascript

        checkbox = document.getElementById("cbokommentar");   // hämtar cbokommentars Id
        textbox = document.getElementById("txtkommentar");    // hämtar txtkommenars Id
          if(textbox.value.length > 0){
            if(!checkbox.checked){
              box.focus();
              throw new Error(checkbox.getAttribute("type"));
            }
          }
          if(checkbox.checked){
            if(textbox.value.length < 5){
              textbox.focus();
              throw new Error(textbox.getAttribute("title"));
            }
          }

    }
    catch (oError) {
        document.querySelector("#errorMsg").innerHTML = "Ange " + oError.message + "!";
        document.getElementById("errorMsg").className += "alert alert-danger"; //ruta för felmeddelande
        return false;

    }
    return true;
}

function resetForm() { // funktion som rensar och återställer formuläret
    document.querySelector("#cbofabrikat").focus();
    document.querySelector("#txtmodell").removeAttribute("class");
    document.querySelector("#errorMsg").innerHTML = "";
}
