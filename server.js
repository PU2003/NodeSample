const http = require("http")
const fs = require("fs")

const server = http.createServer((req,res) => {                        // it takes the function as an argument inside which the arguments will be request
    console.log(req.url,req.method)                                       // and response
    
    // set header content type

    // res.setHeader('Content-type','text/plain');                   // 3 steps to set the response    1. Set Header (here,selecting plain text)
                                                                  //  1. Set Header (here,selecting plain text)
    // res.write("hello-ninjas");                                    //  2. then writing the reponse thatshould be shown on browser

    // res.end();                                                    //  3. now ending the response in order to tell that evrything is set now show it to browser
       
       // set header content type
       res.setHeader("Content-type","text/html")

       let path = "./views/"
       switch(req.url){
          case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
          case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
          case '/about-blah':
            res.statusCode = 301
            res.setHeader('Location','./about')                       // if someone come to path './about-me', we will redirect them to './about'
            res.end()                                                 // so in the header of the response we are changing the path to "./about"
          default:
            path += '404.html'
            res.statusCode = 404
            break;
       }

       // send an html file
       fs.readFile(path, (err,data) => {
           if(err){
              console.log(err)
              res.end()
           }
           else{
              res.write(data)                                     // response should be write in order to be shown on browser
              res.end()
           }
       })
});

server.listen(3000,"localhost",() => {
    console.log("listening for request on 3000")                     // localhost is like a domain name on the web
})