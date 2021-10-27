function validate()
{
    var Username=document.getElementById("name").value;
    var Password=document.getElementById("pwd").value;

    if(Username=="Sanohit"&& Password=="Me@123"){
        alert("login successful!");
        window.open("./gallery.html");
    }
    else{
        alert("login failed!");
    }
}