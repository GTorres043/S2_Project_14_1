"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: 
   Date:   

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/


window.onload = setStyles;

function setStyles() {
      var styleNum = randInt(5);
      var sheet = document.createElement("link");
      sheet.setAttribute("rel", "stylesheet");
      sheet.setAttribute("id", "fancySheet");
      sheet.setAttribute("href", "na_style_" + styleNum + ".css");
      document.head.appendChild(sheet);

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");
      document.getElementById("box").appendChild(figBox);

      for (var i = 0; i <= 4; i++) {
            var sheetIMG = document.createElement("img");
            sheetIMG.setAttribute("src", "na_small_" + i + ".png")
            sheetIMG.setAttribute("alt", "na_style_" + i + ".css")
            sheetIMG.onclick = function (e) {
                  sheet.setAttribute("href", e.target.alt);
            }
            figBox.appendChild(sheetIMG);
      }
      var thumbStyles = document.createElement("style");
      document.head.appendChild(thumbStyles);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs { \
                  position: absolute; \
                  left: 0px; \
                  button: 0px; \
                  margin-top: 500px \
            }", 0);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img { \
                        outline: 1px solid black; \
                        cursor: pointer; \
                        opacity: 0.75; \
                  }", 1);

      document.styleSheets[document.styleSheets.length - 1].insertRule(
            "figure#styleThumbs img:hover { \
                              outline: 1px solid red; \
                              opacity: 1; \
                        }", 2);

}

function randInt(size) {
      return Math.floor(size * Math.random());
}