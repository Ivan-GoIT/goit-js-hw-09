!function(){ref={buttonStartEl:document.querySelector("[data-start]"),buttonStopEl:document.querySelector("[data-stop]")};var t=null;ref.buttonStartEl.addEventListener("click",(function(e){t=function(t){return t.target.setAttribute("disabled","disabled"),setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)}(e)})),ref.buttonStopEl.addEventListener("click",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ref.buttonStartEl;n.removeAttribute("disabled"),clearInterval(t)}))}();
//# sourceMappingURL=01-color-switcher.0ae5a50b.js.map