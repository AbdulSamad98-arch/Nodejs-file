// const fs = require('fs');

// fs.writeFile('server.txt', 'hello world', (err) => {
//     if (err) {
//         console.log('Error:', err);
//     } else {
//         console.log('File successfully created!');
//     }
// });


const http = require("http")
const server = http.createServer((req,res)=>{
    console.log("request")
    res.end("hello server")
})
server.listen(2000,()=>console.log("server start"))