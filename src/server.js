
const { NONAME } = require("dns");
const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const chat = require(__dirname + "/routes/chat.js");
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');
const httpServer = new HttpServer(app)
const io = new IOServer(httpServer)
const Integrante = require(__dirname + "/routes/integrante.js");
const integrantes = new Integrante(__dirname + "/routes/integrantes.txt");
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //para desifrar lo que se manda por post
app.use("/chat/main", chat);
app.use('/public', express.static(__dirname + '/public'));//agrega capeta publiva
app.use('/static', express.static(__dirname + '/static')); //agrega metodos estaticos
app.set('views',__dirname +"/views");//directorio donde estan los archivos de plantillas
app.engine(".hbs",exphbs.engine({
  extname:".hbs",
  defaultLayout:__dirname+"/views/layouts/index.hbs",
  layoutsDir:__dirname+"/views/layouts/",
  partialsDir: __dirname+"/views/partials/"
}))
app.set('view engine', '.hbs') //motor de plantillas a utilizar

app.use(express.json());
app.use(express.urlencoded({ extended: true })); //para desifrar lo que se manda por post


app.get("/", async (req, res) => {
  
  res.render(__dirname + "/views/partials/registro.hbs");
});




const PORT =process.env.PORT||8080
const listener = httpServer.listen(PORT, function () {
  try {
    //integrantes.deleteAll()
    console.log("Your app is listening http://localhost:8080 ");
  } catch (err) {
    console.error(err);
  }
});
io.on('connection',socket => {
 

  socket.emit('idsocket', socket.id);
  socket.on('soketUsuario', data => {
    
    io.sockets.except(data.idio).emit('agregarUsuario', data);
     
    }
     )  

})




