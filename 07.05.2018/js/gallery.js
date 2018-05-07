// JavaScript source code
var nodesArray = Array.prototype.slice.call(document.querySelectorAll(".galleryItem"));
var getindex;
var clickedItem ;

(function () {

    Gallery = function (_gallery,_galleryItem) {
        gallery = document.querySelector(_gallery);
        galleryItem = document.querySelectorAll(_galleryItem);
        overlay = document.querySelector(".overlay")
        var img = document.createElement("img");
        var frame = document.createElement("div");
        frame.appendChild(img);

        var closeButton = document.createElement("div");
        var leftButton = document.createElement("button");
        var rightbutton = document.createElement("button");
        var H1= document.createElement("div")
        frame.appendChild(H1);
        var P= document.createElement("div")
        frame.appendChild(P);
        imgArray= document.querySelectorAll("img");
        H1Array= document.querySelectorAll("h1");
        pArray= document.querySelectorAll("p");
        

       // ItemsArray= document.querySelectorAll(".galleryItem");
        
        
       



        var general = {
            width: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gridAutoRows: "150px",
            gridGap:"10px"
        }
        var item = {
            overflow: "hidden",
            boxSizing: "border-box",
            border: "5px solid #F1D2C2",
            borderRadius: "5px",
           
        }

        this.gallerySetting = function () {
            for (var prop in general) {
                for (var gprop in gallery.style) {
                    if (prop == gprop) {
                        gallery.style[gprop] = general[prop];
                    }
                }
            }
            return this;
        };

        this.itemSetting = function () {
            for (i = 0; i < galleryItem.length; i++) {
                for (var prop in item) {
                    for (var gprop in galleryItem[i].style) {
                        if (prop == gprop) {
                            galleryItem[i].style[gprop] = item[prop];
                            galleryItem[i].querySelector("img").style.width = "100%";


                        }
                    }
                }
            }
            return this;
        };
        this.gallerySetting();
        this.itemSetting();

        for (i = 0; i < galleryItem.length; i++) {
            
            galleryItem[i].onclick = function (event) {
                overlay.style.display = "block";
                overlay.style.width = window.innerWidth + "px";
                overlay.style.height = window.innerHeight + "px";
                document.body.appendChild(frame);
                frame.className = "frame";
                frame.style.left = (window.innerWidth / 2 - frame.clientWidth / 2) + "px";
                frame.style.top = (window.innerHeight / 2 - frame.clientHeight / 2) + "px";
                img.src = this.querySelector("img").src;
                img.style.height= "460px";
            //    img.style.width = "100%";

           
                
                frame.appendChild(closeButton);
                closeButton.innerHTML="x close"
                closeButton.className="closeButton"
                closeButton.style.left=(frame.clientWidth / 2 - closeButton.clientWidth / 2)+ "px";
               
                frame.appendChild(leftButton);
                leftButton.innerHTML="<";
                leftButton.className="leftButton"
                leftButton.style.left=((frame.clientWidth / 2 - leftButton.clientWidth / 2)-20)+ "px";


                frame.appendChild(rightbutton);
                rightbutton.innerHTML= ">";
                rightbutton.className="rightbutton";
                rightbutton.style.left=((frame.clientWidth / 2 - rightbutton.clientWidth / 2)+20)+ "px";

                H1.innerHTML=this.querySelector("h1").innerHTML;
                
                H1.className="H1";
                

                P.innerHTML=this.querySelector("p").innerHTML;
                P.className="P"




                clickedItem = (nodesArray.indexOf(event.target));
                rightbutton.onclick=  function () {
                
                if (clickedItem>=9) {
                    clickedItem=-1;
                }
                else{
                    img.src= imgArray[clickedItem+1].src;
                    H1.innerHTML=H1Array[clickedItem+1].innerHTML;
                    P.innerHTML=pArray[clickedItem+1].innerHTML;
                    clickedItem++;

                }
                }

                leftButton.onclick=  function () {
                
                    if (clickedItem<=0) {
                        clickedItem=10;
                    }
                    else{
                        img.src= imgArray[clickedItem-1].src;
                        H1.innerHTML=H1Array[clickedItem-1].innerHTML;
                        P.innerHTML=pArray[clickedItem-1].innerHTML;
                        clickedItem--;
    
                    }
                    }
               
                

            }

            // galleryItem[i].addEventListener("click", getindex)

            //    getindex = function getnumber (event) {
            //    clickedItem = (nodesArray.indexOf(event.target));
            //    return clickedItem;

            // }
            
        }
        window.onclick = function (event) {
            if (event.target.className == "closeButton") {
                overlay.style.display = "none";
                document.body.removeChild(frame)
            }
        }

    }

    
})()



