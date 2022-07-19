//Simple Text editor module
// DEVELOPED BY Sayanjit
//functionality includes font bolding,italic and code
//flexible writing with backspace and enter functionality

let cursorRender = (editor) => {
    //rerendering cursor
    editor.innerHTML +=`<span id="crsr" class="blinking-cursor">|</span>`;
}

let Writer = (e,editor,styleType) => {
    if(e.key.toLowerCase() == "backspace") {
        //build the backspace functionality
        remove = editor.lastChild;
        // handler for br tag
        if (remove.tagName.toLowerCase() == "br"){
            editor.removeChild(remove);
            remove = editor.lastChild;
        }
        if(remove == document.querySelector("#crsr")){
            editor.removeChild(remove);
            remove = editor.lastChild;
        }
        editor.removeChild(remove);
        cursorRender(editor);
        return;
    }
    if(e.key.toLowerCase() == "enter") {
        editor.innerHTML += "<br>";
        document.querySelector("#crsr").remove();
        cursorRender(editor);
        return;
    }
    if(e.key.toLowerCase() == "shift" || e.key.toLowerCase() == "capslock"){
        //escape;
        return;
    }
    if(styleType == "bold") {
        editor.innerHTML += `<strong>${e.key}</strong>`;
        
    }else if(styleType == "italic") {
        editor.innerHTML += `<em>${e.key}</em>`
    }else if(styleType == "code"){
        editor.innerHTML += `<code>${e.key}</code>`
    }else{
        editor.innerHTML +=`<span>${e.key}</span>`
    }

    //rerender cursor
    document.querySelector("#crsr").remove();
    cursorRender(editor);
}

document.addEventListener("DOMContentLoaded",() => {
    let styleType = "";
    let editor = document.querySelector("#editor");
    document.querySelector("#bold").addEventListener("click",() => {
        if(styleType == "bold"){
            styleType = "";
        }else{
            styleType = "bold";
        }
        editor.focus();
    })
    document.querySelector("#italic").addEventListener("click",() => {
        if(styleType == "italic"){
            styleType = "";
        }else{
            styleType = "italic";
        }
        editor.focus();
    })
    document.querySelector("#code").addEventListener("click",() => {
        if(styleType == "code"){
            styleType = "";
        }else{
            styleType = "code";
        }
        editor.focus();
    })

    document.addEventListener("keydown",(e) =>{
        Writer(e,editor,styleType);
        
    })
})
