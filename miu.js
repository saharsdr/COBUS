
var main=document.getElementById("min");
var footer=document.getElementById("footy");
var temp=document.getElementById("midway");


////when we click on menu icon open or close the menu
function dropdowncheck(){
    var x=document.getElementById("navi");
    var classHeader=document.getElementById("heady");
    var classTextBox=document.getElementById("texty");
    

    console.log("hi");
    if(x.className==="nav"){
        x.className+=" drop";
        classHeader.className+=" un";
        classTextBox.className+=" hide";

         ///when menu close and we make it open for hidden another part of page
        temp.style.display="none";
        main.style.display="none";
        footer.style.display="none";
        
    }
    else{
        x.className="nav";
        classHeader.className="normal";
        classTextBox.className="text-box";

        temp.style.display="block";
    }
}


 ///when screen will be small and navbar showed as menu
window.addEventListener("resize", function() {
    if (window.innerWidth > 680) {
    var x=document.getElementById("navi");
    var classHeader=document.getElementById("heady");
    var classTextBox=document.getElementById("texty");

    if(x.className==="nav drop"){
        x.className="nav";
        classHeader.className="normal";
        classTextBox.className="text-box";


        ///when menu open and we make the page bigger for showing full page
        temp.style.display="block";
        main.style.display="block";
        footer.style.display="block";
        // document.getElementById("midway").style.display="block";
    }
    
 };
 });

 

// ################### Change the paragrap by any click on that three btn ################## //
function btn_1(){
    document.getElementById("pargy").innerHTML = "An old man lived in the village. He was one of the most unfortunate people in the world. The whole village was tired of him; he was always gloomy, he constantly complained and was always in a bad mood.";
}
function btn_2(){
    document.getElementById("pargy").innerHTML = "The longer he lived, the more bile he was becoming and the more poisonous were his words. People avoided him, because his misfortune became contagious. It was even unnatural and insulting to be happy next to him.";
}
function btn_3(){
    document.getElementById("pargy").innerHTML = "Nothing special. Eighty years I’ve been chasing happiness, and it was useless. And then I decided to live without happiness and just enjoy life. That’s why I’m happy now.";
}

// ################### Active Buttons ################## //
var btns=document.getElementsByClassName("btn");
for(var i=0;i<btns.length;i++){
    btns[i].addEventListener("click",function(){
    var current=document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
}
