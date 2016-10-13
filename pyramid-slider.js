var slider = document.getElementById('slider1');
slider.addEventListener("input", function () {
    
    heightStr = document.getElementById("slider1").value
    height = parseInt(heightStr);
    drawPyramid(height);
});


function drawPyramid(height) {
    
    document.getElementById("pyramid").innerHTML = "";

     for (var row = 0; row < height; row++) {

         
         var numBricks = row + 2;
         var numSpaces = height - row - 1;

      
         var rowStr = "";
         for (var i = 0; i < numSpaces; i++) {
             rowStr += ".";
         }
         for (var i = 0; i < numBricks; i++) {
             rowStr += "#";
         }

        // create a text element with the string of characters
        textElem = document.createTextNode(rowStr);

        // create a <p> element with the text inside
        rowElem = document.createElement("p");
        rowElem.appendChild(textElem);

        // insert the paragraph as a child of the container <div>
        document.getElementById("pyramid").appendChild(rowElem);
    }
}