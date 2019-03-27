document.getElementById("name").addEventListener("keyup", function(){
    var name = document.getElementById("name").value;
    var nameHead = document.getElementById("head");
    nameHead.innerHTML = "Hello " + name + " welcome to the chrome extension ";
    console.log(name);
})