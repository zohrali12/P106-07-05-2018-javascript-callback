// JavaScript source code

//var btn = document.querySelector("button");
//var ballArr=[]
//var globalX;
//var globalY;
//btn.onclick = function () {
//    var randX = Math.floor(Math.random() * (window.innerWidth - 40))
//    var randY = Math.floor(Math.random() * (window.innerHeight - 40))
//    var ball = document.createElement("div");
//    ball.className = "ball"; // classList.add() // classList.remove()
//    ball.style.left = randX + "px";
//    ball.style.top = randY + "px";
//    document.body.appendChild(ball);
//    ballArr.push(ball);
//    console.log(ballArr)
//}

//window.onclick = function (event) {
//    if (event.target.tagName != "BUTTON") {
//        globalX = event.clientX;
//        globalY = event.clientY;
//        var ballCount = 1;
//        var listItem = 0;
        
//        for (var j = 0; j < ballCount; j++) {


//            for (i = 0; i < ballCount; i++) {

//                ballArr[listItem].style.left = globalX + "px";
//                ballArr[listItem].style.top = globalY + "px";
//                globalX += 40;
//                listItem++;
//            }
//            globalX = event.clientX - 20 - (j * 20);
//            globalY -= 40;
//            ballCount++;


//        }


        
//    }
//    console.log(event.clientX, event.clientY);
//}

var newGallery = new Gallery(".gallery",".galleryItem");

