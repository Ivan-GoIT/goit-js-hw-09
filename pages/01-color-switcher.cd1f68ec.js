ref={buttonStartEl:document.querySelector("[data-start]"),buttonStopEl:document.querySelector("[data-stop]")};let t=null;ref.buttonStartEl.addEventListener("click",(e=>{t=function(t){return t.target.setAttribute("disabled","disabled"),setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)}(e)})),ref.buttonStopEl.addEventListener("click",(function(e,r=ref.buttonStartEl,o=t){r.removeAttribute("disabled"),clearInterval(t)}));
//# sourceMappingURL=01-color-switcher.cd1f68ec.js.map