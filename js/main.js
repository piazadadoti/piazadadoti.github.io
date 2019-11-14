function loadJSON(callback) {   
    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'perolas/perolas.json', true);
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
}

function init() {
    loadJSON(function(response) {
       var perolas = JSON.parse(response);
       console.log(perolas);
       perolas.forEach(perola => {
           $('#container-perolas').append('<blockquote>' + perola.frase.replace(/[\r\n]+/gm, '<br>') + '</blockquote><cite>' + perola.autor + ' em ' + perola.data + '</cite>');
       });
    });
}

init();
