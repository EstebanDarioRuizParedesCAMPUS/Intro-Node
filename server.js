// 1- Importar modulo global http
const http = require('http');

/*function requestListener(req, rese){
}*/

//2- crear servidor web

// Preferiblemente usar arrow function

const server = http.createServer((req,res) =>{
    console.log(req.url, req.method, req.headers);
    // Cerrar o salir del ciclo continuo de eventos
    /*Process.exit();*/
    const url = req.url
    //routing
    if(url === '/'){
        //enviando respuestas
        res.setHeader('Content-Type','text/html');
        res.write("<html>");
        res.write("<head><title>Ahuevo NODEJS</title></head>")
        res.write(`<body>
        <h1>Formulario</h1>
        <form action="/message" method="POST">
        <label for="message">Llena el formulario completamente seguro y nada sospechoso</label><br><br>
        <input type="text" name="message" placeholder="Ingresa datos"><br><br>
        <input type="submit" name="send" value="Send">
        </form>
        </body>`)
        res.write("</html>");
        res.end();

    } else if (url === '/message'){
        res.write("<br><h2>Felicidades, ahora eres gay</h2>")
        res.end();
    }

});

server.listen(5000);
