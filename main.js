function checkPassword() {
    var abdo = document.getElementById("passwordInput").value;
    var ahmed = document.getElementById("passwordInput").value;
    var amer = document.getElementById("passwordInput").value;
    var asma = document.getElementById("passwordInput").value;
    var basma = document.getElementById("passwordInput").value;
    var bsmala = document.getElementById("passwordInput").value;
    var selectValue = document.getElementById("mySelect").value;
    // قم بتغيير كلمة المرور و الصف و الرابط حسب احتياجاتك
    if (abdo === "35e" && selectValue === "perp1") {
        document.getElementById("linkOutput").innerHTML = "<a href='abdo_degree_prep1.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (ahmed === "79y" && selectValue === "perp1") {
        document.getElementById("linkOutput").innerHTML = "<a href='ahmed_degree_prep1.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (amer === "57t" && selectValue === "perp2") {
        document.getElementById("linkOutput").innerHTML = "<a href='amer_degree_perp2.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (asma === "46r" && selectValue === "perp2") {
        document.getElementById("linkOutput").innerHTML = "<a href='asma_degree_prep2.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (basma === "35q" && selectValue === "perp3") {
        document.getElementById("linkOutput").innerHTML = "<a href='basma_degree_perp3.html' class='a-2'><h2>الرابط</h2></a>";
    } else if (bsmala === "88i" && selectValue === "perp3") {
        document.getElementById("linkOutput").innerHTML = "<a href='bsmala_degree_prep3.html' class='a-2'><h2>الرابط</h2></a>";
    }
    else {
        document.getElementById("linkOutput").innerHTML = "<h2 class='a-2' >كلمة المرور غير صحيحة.</h2>";
    }
}