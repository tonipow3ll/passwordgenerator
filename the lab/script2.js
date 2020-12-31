document.addEventListener("click" , function(e){
if (e.target.matches("button")){
    console.log(e.target.parentNode);
    e.target.parentNode.children[0].value="";
}
})

// event delegation attaches an event to the entire document, only going to do something if the 'target' matches whatever the query selector is "if it matches the button, we want it to do something"
