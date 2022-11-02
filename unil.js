function open_nav() {
    document.getElementById("navbar").style.height = "60%";
    
}
function close_nav() {
    document.getElementById("navbar").style.height = "0";
}
function open_second_nav(){
    document.getElementById("secondnavbar").style.width = "95%";
}
function close_second_nav() {
    document.getElementById("secondnavbar").style.width = "0";
}

/*function open_second_nav(){
    var y = document.getElementById("secondnavbar");{
        if (y.style.display === "block") {
            y.style.display = "none";
        }
        else {
            y.style.display = 'block'
        }
    }
}
/*for the sileshow */
let image = document.getElementById("slideimg");
let myimage = ["slide1.jpeg","slide2.jpeg","slide3.jpeg"];
let slide1 = 0;
function slideshow() {
    image.setAttribute("src", myimage[slide1])
    slide1++
    if (slide1 >= myimage.length) {
        slide1 = 0
    }
}
setInterval(slideshow, 2000)