

var validation = new Validation();
var ok = function(){
     // validation
     var ykien = DomID("ykien").value;
     var ten = DomID("hoten").value;
     var loi = 0;
     if(KiemTraDauVaoRong(ykien, "ykien") == true){
          loi++;
     }
     if(KiemTraDauVaoRong(ten, "hoten") == true){
          loi++;
     }
     if(loi != 0){
          alert("Vui lòng nhập đủ thông tin để gửi bình luận!");
          return false;
          
     }
     alert("Bình luận thành công!");
     


     // get datetime
     const h = new Date();
     const m = new Date();
     const ngay = new Date();
     const thang = new Date();
    

     // thêm comment
     document.getElementById("cmt2").style.display = "block";
     document.getElementById("cmt2").style.display = "flex";
     var noidungykien = document.getElementById("ykien").value;
     var hotencmt = document.getElementById("hoten").value;
     document.getElementById("name-cm2").innerHTML = hotencmt;
     document.getElementById("content-cm2").innerHTML = noidungykien;
     document.getElementById("gio").innerHTML = h.getHours();;
     document.getElementById("phut").innerHTML =  m.getMinutes();
     document.getElementById("ngay").innerHTML = ngay.getDate();
     document.getElementById("thang").innerHTML =  thang.getMonth();

     // xóa nội dung comment
  //   document.getElementById("ykien").remove;
     
     
     

}
function KiemTraDauVaoRong(value, id){
     if(validation.kiemTraRong(value) == true){
          document.getElementById(id).style.borderColor = "red";
          return true;
     } else {
          document.getElementById(id).style.borderColor = "green";
          return false;
     }
}
