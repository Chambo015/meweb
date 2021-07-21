"use strict";

console.log(document.documentElement.scrollTop);


function createLine() {
      let line = document.createElement("div");
      line.style.border = "1px solid green"
      line.style.position = "fixed";
      line.style.backgroundColor = "black";
      return line;
}

function createText() {
      let text = document.createElement("div");
      text.style.color = "white";
      text.style.backgroundColor = "green";
      text.style.position = "fixed";
      return text;
}


let lineYWindow  = createLine(),
    lineYWindowText = createText(),
    lineXWindow = createLine(),
    lineXWindowText = createText(),
      lineYWindowBottom = createLine(),
      lineYWindowBottomText = createText(),
      lineXWindowBottom = createLine(),
      lineXWindowBottomText = createText(),
        lineYPage = createLine(),
        lineYPageText = createText(),
        lineYPageBottom = createLine(),
        lineYPageBottomText = createText();





const block = document.querySelector(".coords-block_head");



block.addEventListener('mouseover', () => {
       
      const coordsBlock = block.getBoundingClientRect();

      /* lineYWindow */
      lineYWindow.style.height = coordsBlock.top + "px";
      lineYWindow.style.top = "0";
      lineYWindow.style.left = coordsBlock.left + "px";
      document.body.append(lineYWindow);
      
      /* lineYWindowText */
      lineYWindowText.innerHTML = "от окна  " + Math.floor(coordsBlock.top) + "px";
      lineYWindowText.style.left = (coordsBlock.left - 40) + "px";
      lineYWindowText.style.top = (coordsBlock.top - 120) + "px";
      lineYWindowText.style.transform = "rotate(90deg)";
      document.body.append(lineYWindowText);

      /* lineXWindow */
      lineXWindow.style.left = "0";
      lineXWindow.style.top = coordsBlock.top + "px";
      lineXWindow.style.width = coordsBlock.left + "px";
      document.body.append(lineXWindow);

      /* lineXWindowText */
      lineXWindowText.innerHTML = "от окна  " + Math.floor(coordsBlock.left) + "px";
      lineXWindowText.style.left = (coordsBlock.left - 120) + "px";
      lineXWindowText.style.top = (coordsBlock.top - 16) + "px";
      document.body.append(lineXWindowText);

      /* lineYWindowBottom */
      lineYWindowBottom.style.height = coordsBlock.bottom + "px";
      lineYWindowBottom.style.top = "0";
      lineYWindowBottom.style.left = (coordsBlock.right) + "px";
      document.body.append(lineYWindowBottom);

      /* lineYWindowBottomText */
      lineYWindowBottomText.innerHTML = "от окна  " + Math.floor(coordsBlock.bottom) + "px";
      lineYWindowBottomText.style.left = (coordsBlock.right - 40) + "px";
      lineYWindowBottomText.style.top = (coordsBlock.bottom - 120) + "px";
      lineYWindowBottomText.style.transform = "rotate(90deg)";
      document.body.append(lineYWindowBottomText);

      /* lineXWindowBottom */
      lineXWindowBottom.style.left = "0";
      lineXWindowBottom.style.top = coordsBlock.bottom + "px";
      lineXWindowBottom.style.width = coordsBlock.right + "px";
      document.body.append(lineXWindowBottom);

      /* lineXWindowBottomText  */
      lineXWindowBottomText.innerHTML = "от окна  " + Math.floor(coordsBlock.right) + "px";
      lineXWindowBottomText.style.left = (coordsBlock.right - 150) + "px";
      lineXWindowBottomText.style.top = (coordsBlock.bottom - 17) + "px";
      document.body.append(lineXWindowBottomText);

      /* lineYPage */
      lineYPage.style.border = "1px solid blue"
      lineYPage.style.height = coordsBlock.top  + "px";
      lineYPage.style.top = "0";
      lineYPage.style.left = (coordsBlock.left + 70) + "px";
      document.body.append(lineYPage);


      /* lineYPageText */
      lineYPageText.style.backgroundColor = "blue";
      lineYPageText.innerHTML = "от страницы  " + Math.floor(coordsBlock.top + window.pageYOffset) + "px";
      lineYPageText.style.left = (coordsBlock.left + 10) + "px";
      lineYPageText.style.top = (coordsBlock.top - 120) + "px";
      lineYPageText.style.transform = "rotate(90deg)";
      document.body.append(lineYPageText);

      /* lineYPageBottom */
      lineYPageBottom.style.border = "1px solid blue"
      lineYPageBottom.style.height = coordsBlock.bottom + "px";
      lineYPageBottom.style.top = "0";
      lineYPageBottom.style.left = (coordsBlock.right - 170) + "px";
      document.body.append(lineYPageBottom);

      /* lineYPageBottomText */
      lineYPageBottomText.style.backgroundColor = "blue";
      lineYPageBottomText.innerHTML = "от страницы  " + Math.floor(coordsBlock.bottom + window.pageYOffset) + "px";
      lineYPageBottomText.style.left = (coordsBlock.right - 233) + "px";
      lineYPageBottomText.style.top = (coordsBlock.bottom - 120) + "px";
      lineYPageBottomText.style.transform = "rotate(90deg)";
      document.body.append(lineYPageBottomText);


      window.addEventListener('scroll', () => {

            const coordsBlock = block.getBoundingClientRect();

            /* lineYWindow */
            lineYWindow.style.height = coordsBlock.top + "px";
            lineYWindow.style.left = coordsBlock.left + "px";
            document.body.append(lineYWindow);

            /* lineYWindowText */
            lineYWindowText.innerHTML = "от окна  " + Math.floor(coordsBlock.top) + "px";
            lineYWindowText.style.left = (coordsBlock.left - 40) + "px";
            lineYWindowText.style.top = (coordsBlock.top - 120) + "px";
            document.body.append(lineYWindowText);

            /* lineXWindow */
            lineXWindow.style.top = coordsBlock.top + "px";
            lineXWindow.style.width = coordsBlock.left + "px";
            document.body.append(lineXWindow);

            /* lineXWindowText */
            lineXWindowText.innerHTML = "от окна  " + Math.floor(coordsBlock.left) + "px";
            lineXWindowText.style.left = (coordsBlock.left - 120) + "px";
            lineXWindowText.style.top = (coordsBlock.top - 16) + "px";
            document.body.append(lineXWindowText);

            /* lineYWindowBottom */
            lineYWindowBottom.style.height = coordsBlock.bottom + "px";
            lineYWindowBottom.style.top = "0";
            lineYWindowBottom.style.left = (coordsBlock.right) + "px";
            document.body.append(lineYWindowBottom);

            /* lineYWindowBottomText */
            lineYWindowBottomText.innerHTML = "от окна  " + Math.floor(coordsBlock.bottom) + "px";
            lineYWindowBottomText.style.left = (coordsBlock.right - 40) + "px";
            lineYWindowBottomText.style.top = (coordsBlock.bottom - 120) + "px";
            document.body.append(lineYWindowBottomText);

            /* lineXWindowBottom */
            lineXWindowBottom.style.left = "0";
            lineXWindowBottom.style.top = coordsBlock.bottom + "px";
            lineXWindowBottom.style.width = coordsBlock.right + "px";
            document.body.append(lineXWindowBottom);

            /* lineXWindowBottomText  */
            lineXWindowBottomText.innerHTML = "от окна  " + Math.floor(coordsBlock.right) + "px";
            lineXWindowBottomText.style.left = (coordsBlock.right - 150) + "px";
            lineXWindowBottomText.style.top = (coordsBlock.bottom - 17) + "px";
            document.body.append(lineXWindowBottomText);

            /* lineYPage */
            lineYPage.style.border = "1px solid blue"
            lineYPage.style.height = coordsBlock.top + "px";
            lineYPage.style.top = "0";
            lineYPage.style.left = (coordsBlock.left + 70) + "px";
            document.body.append(lineYPage);


            /* lineYPageText */
            lineYPageText.style.backgroundColor = "blue";
            lineYPageText.innerHTML = "от страницы  " + Math.floor(coordsBlock.top + window.pageYOffset) + "px";
            lineYPageText.style.left = (coordsBlock.left + 10) + "px";
            lineYPageText.style.top = (coordsBlock.top - 120) + "px";
            document.body.append(lineYPageText);

            /* lineYPageBottom */
            lineYPageBottom.style.border = "1px solid blue"
            lineYPageBottom.style.height = coordsBlock.bottom + "px";
            lineYPageBottom.style.top = "0";
            lineYPageBottom.style.left = (coordsBlock.right - 170) + "px";
            document.body.append(lineYPageBottom);

            /* lineYPageBottomText */
            lineYPageBottomText.style.backgroundColor = "blue";
            lineYPageBottomText.innerHTML = "от страницы  " + Math.floor(coordsBlock.bottom + window.pageYOffset) + "px";
            lineYPageBottomText.style.left = (coordsBlock.right - 233) + "px";
            lineYPageBottomText.style.top = (coordsBlock.bottom - 120) + "px";
            document.body.append(lineYPageBottomText);

      })
       
});


block.addEventListener('mouseout', () => {
     lineYWindow.remove();
     lineXWindow.remove();
     lineYWindowText.remove();
     lineXWindowText.remove();
     lineYWindowBottom.remove();
     lineYWindowBottomText.remove();
     lineXWindowBottom.remove();
     lineXWindowBottomText.remove();
     lineYPageText.remove();
     lineYPage.remove();
     lineYPageBottom.remove();
     lineYPageBottomText.remove();

     window.addEventListener('scroll', () => {
           lineYWindow.remove();
           lineXWindow.remove();
           lineYWindowText.remove();
           lineXWindowText.remove();
           lineYWindowBottom.remove();
           lineYWindowBottomText.remove();
           lineXWindowBottom.remove();
           lineXWindowBottomText.remove();
           lineYPageText.remove();
           lineYPage.remove();
           lineYPageBottom.remove();
           lineYPageBottomText.remove();
     })
     
});


