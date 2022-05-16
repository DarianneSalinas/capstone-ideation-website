
/* ------------------- DRAGGABLE BOXES------------------- */
function drag() {
   var dragging = false;
   var mouseX, mouseY;
   var eleX, eleY;

   var boxes = document.querySelectorAll("[draggable]");
   for (let i = 0; i < boxes.length; i++) {
     boxes[i].addEventListener("mousedown", mouseDown);
     boxes[i].style.top = 0;
     boxes[i].style.left = 0;
   }
   function mouseDown(e) {
     e.preventDefault();

     dragging = this;

     mouseX = e.pageX;
     mouseY = e.pageY;
     eleX = Number.parseInt(dragging.style.left);
     eleY = Number.parseInt(dragging.style.top);

     document.addEventListener("mousemove", mouseMove);
     document.addEventListener("mouseup", mouseUp);
   }
   function mouseMove(e) {
     if (dragging) {
       deltaMouseX = e.pageX - mouseX;
       deltaMouseY = e.pageY - mouseY;

       dragging.style.left = deltaMouseX + eleX + "px";
       dragging.style.top = deltaMouseY + eleY + "px";
     }
   }
   function mouseUp(e) {
     dragging = false;

     document.removeEventListener("mouseup", mouseUp);
     document.removeEventListener("mousemove", mouseMove);
   }
 }
 drag();




 /* ------------------- IMG HANDLING DRAG & DROP ----------------------- */
 
 let boxesArray = document.querySelectorAll(".box") 
 for (let i = 0; i < boxesArray.length; i++) {


 const imgDropBox = boxesArray[i];
 var uploadedImage;
 
    //change canvas border when hovering
 imgDropBox.ondragenter = function ()  {
   if(imgDropBox.style.border !== "solid") {
    imgDropBox.style.border = "dashed 2px #555";
   } 
  }
 
 //resets borders when hovering is inactive
 imgDropBox.ondragleave = function() {
  if(imgDropBox.style.border !== "solid") {
    imgDropBox.style.border = "1px dotted black";
  }
 };
 
 
 imgDropBox.addEventListener('dragover', (event) => {
     event.stopPropagation();
     event.preventDefault();
 
     //style drag and drop as 'copy' file
     event.dataTransfer.dropEffect = 'copy';
  });
 
  //event listener for dropping the image inside of the div
  imgDropBox.addEventListener('drop', (event) => {
     event.stopPropagation();
     event.preventDefault();
     imgDropBox.style.border = "solid"
     const fileList = event.dataTransfer.files;
     //do something with appendChild
    //  event.target.appendChild()
//document.querySelector("#file-name").textContent = fileList[0].name;
console.log(fileList[0])
    readImage(fileList[0], imgDropBox);
  });
} //end of for loop


  //converts img into data uri
  const readImage = (file, boxDiv) => {
     const reader = new FileReader();
    reader.addEventListener('load', (event) => {
     let uploadedImage = event.target.result;  
     boxDiv.style.backgroundImage= `url(${uploadedImage})`;
      
 });
     reader.readAsDataURL(file);
  }

/* ------------------- BOX GENERATION ------------------- */
  //create for loop using boxesArray for box generation

//let inputField = document.getElementByID("Input-Field");
//let boxNumber = inputField.value;
// for (let i = 0; i < boxNumber; i++)

//create function called generateBoxes
//created new var called generateBoxInput and use getElementById to refer to box-number id of input field
// created new var called boxnumber and getting value of input field by referencing generateBoxInput var
//now we have box number
const generateBoxes = () => {
var generateBoxInput = document.getElementById("box-number")
var boxNumber = generateBoxInput.value

//"generate" the boxes
for(let i = 0; i < boxNumber; i++) {
  boxesArray[i].style.display= "inline"
}
}

//getElementsByName returns an array, specify by using index 0 to get the first instance
//created event listener, on click calls generateBoxes function
var generateBoxButton = document.getElementsByName("generateBox-submit")[0]
generateBoxButton.addEventListener('click', generateBoxes)



/*---------------------------------------------------------------------------- */



