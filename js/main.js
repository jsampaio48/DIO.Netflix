

function AlterarSrc(objeto, novoLink) {
    document.getElementById(objeto).src = novoLink;       
}

function BuscaBtn(elemento){
    // Get the modal
    var modal = document.getElementById("myModal");

    switch(elemento.id){
        case "myBtn1":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/Mfbdl7oA4pU");
            break;
        case "myBtn2":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/N6lGsMND5ds");
            break;
        case "myBtn3":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/QSvCZ-ov5ls");
            break;
        case "myBtn4":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/yyJBHeU0sBE");
            break;
        case "myBtn5":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/sZIqMz_AC24");
            break;
        case "myBtn6":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/DkPluechlNY");
            break;
        case "myBtn7":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/zstihByJe9I");
            break;
        case "myBtn8":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/KUws1kuVinE");
            break;
        case "myBtn9":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/ZHaokMTWgdY");
            break;
        case "myBtn10":
            AlterarSrc("bloco-video", "https://www.youtube.com/embed/lhJx3iFp_y8");
            break;
                
        }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    elemento.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    }

}
