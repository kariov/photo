

//the size of the navbar:
    navbar = document.getElementById("navbar");
    style = window.getComputedStyle(navbar);
    widthValue = style.getPropertyValue('width');
    widthValue = parseInt(widthValue);
//alert(widthValue);

/* ************************* header *************************** */

    //changing the size of the logo:
    if(widthValue < 890){
        document.getElementById("imgLogo").style.width = "190px";
        document.getElementById("imgLogo").style.marginTop = "7px";
        document.getElementById("navMenu").style.textAlign = "center";
    }else {
        document.getElementById("imgLogo").style.width = "250px";
    }
    if(widthValue < 280){
        document.getElementById("imgLogo").style.width = "160px";
        document.getElementById("imgLogo").style.marginTop = "10px";
    }
    //changing the camera size :
    if(widthValue < 1030){
        document.getElementById("camera").style.width = "70%";
    }
    //changing the position of the buttons:
    if(widthValue < 760){
        document.getElementById("buttonToLeft").style.marginLeft = "-50px";
    }
 if(widthValue < 1030){
     document.getElementById("camera").style.width = "70%";
 }
    // margin of the titles :
    if(widthValue > 750){
        document.getElementById("titles").style.marginTop = "100px";
}

/* ************************** info ************************** */
// changing the background image size:

if(widthValue < 520){
    document.getElementById("infoSection").style.height =  "100%";
}

/* ************************* gallery ************************ */
//buttons :
if(widthValue < 720){
    document.getElementById("photos").style.marginTop = "-50px";
    document.getElementById("photos").style.marginBottom = "-50px";
    document.getElementById("btnL").style.marginLeft = "20px";
    document.getElementById("btnR").style.marginLeft = "20px";


}

