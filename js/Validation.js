
function Validation(){
     this.kiemTraRong = function (value){
          if(value.trim() === ""){
               return true;
          } else {
               return false;
          }

     }
     this.KiemTraEmail = function (value){
          var regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          return regexEmail.test(value.toLowerCase());
     }
     this.KiemTraSDT = function (value){
          var regexSDT = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
          if(regexSDT.test(value)){
               return true;
          } else {
               return false;
          }
     }
}