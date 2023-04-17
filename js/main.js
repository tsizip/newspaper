
var validation = new Validation();

function DomID(id){
     var element = document.getElementById(id);
     return element;
}

function xacnhan(){
     // LAY THONG TIN 
     var hoten = DomID("name").value;
     var sdt = DomID("sdt").value;
     var adr = DomID("adr").value;
     var email = DomID("email").value;
     var tieude = DomID("tieude").value;
     var area = DomID("area").value;
     var loi = 0;
     // KIEM TRA THONG TIN NHAP VAO
     // kiem tra rong
     if(KiemTraDauVaoRong(hoten, "name") == true){
          loi++;
     }
     if(KiemTraDauVaoRong(sdt, "sdt") == true){
          loi++;
     }
     if(KiemTraDauVaoRong(adr, "adr") == true){
          loi++;
     }
     if(KiemTraDauVaoRong(tieude, "tieude") == true){
          loi++;
     }
     if(KiemTraDauVaoRong(area, "area") == true){
          loi++;
     }
     if(KiemTraDauVaoRong(email, "email") == true){
          loi++;
     }
     if(validation.KiemTraEmail(email)){
          document.getElementById("email").style.borderColor = "green";
     } else {
          document.getElementById("email").style.borderColor = "red";
          loi++;
     }
     if(validation.KiemTraSDT(sdt)){
          document.getElementById("sdt").style.borderColor = "green";
     } else {
          document.getElementById("sdt").style.borderColor = "red";
          loi++;
     }
    
     if(loi != 0){
          alert("Vui lòng nhập đủ thông tin và đúng định dạng!");
          return false;
          
     }
     alert("Gửi thành công!");
     location.reload();
     

     


}

function KiemTraDauVaoRong(value, id){
     if(validation.kiemTraRong(value) == true){
          DomID(id).style.borderColor = "red";
          return true;
     } else {
          DomID(id).style.borderColor = "green";
          return false;
     }
}




