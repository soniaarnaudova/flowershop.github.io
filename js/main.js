function validateForm() {
 var name = document.getElementById("name").value;
 var mail = document.getElementById("mail").value;
 var tel = document.getElementById("tel").value;
 var comment = document.getElementById("comment").value;
   if (name == "") {
        alert("Моля, въведете името си!");
        return false;
   }
   if (mail == "") {
        alert("Моля, въведете e-mail адреса си!");
        return false;
   }
    if (tel == "") {
        alert("Моля, въведете телефонния си номер!");
        return false;
   }
    if (comment == "") {
        alert("Моля, въведете съобщение!");
        return false;
   }
    return true;
}