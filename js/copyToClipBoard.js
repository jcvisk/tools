/**
 * Copia al portapapeles el urlJoin
 * @param element Id del elemento del que se quiere copiar el texto
*/

function copyClipboard(element) {
    var $bridge = $("<input>")
    $("body").append($bridge);
    $bridge.val($(element).text()).select();
    document.execCommand("copy");
    $bridge.remove();
    
    //Muestra el tooltip por 1.5s
    $(element).children().attr("title","Copiado en el portapapeles");
    $(element).children().attr("data-original-title","Copiado en el portapapeles");
    $(element).children().tooltip('show');
    setTimeout(function(){
        $(element).children().tooltip('dispose');
    }, 1500);
}