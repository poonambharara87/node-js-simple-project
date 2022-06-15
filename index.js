const fs = require('fs');
const http = require('http');
const url = require('url');

// const Eleven = "hello world";
// console.log(Eleven);

// const textIn = fs.readFileSync('./input.txt', 'utf-8');    

// console.log(textIn);

// const textOut = `'text out it here' + ${textIn}\n Created on ${Date.now()}`;
// console.log(textOut);

// fs.writeFileSync('./output.text', textOut);
// console.log('file written');

// fs.readFile('./read.txt', 'utf-8', (err, data) => {
//     console.log(data);
// });

//SERVER

const data = fs.readFileSync(`data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer( (req, res) => {
    const pathName = req.url;
    if(pathName === '/' || pathName === 'overview'){
        res.end('This is overview');
    }else if( pathName === 'product' || pathName === '/product'){
        res.end('This is product!')
    }else if( pathName === '/api'){
            res.writeHead(200, {'Content-type': 'application/json'})
            res.end(data);
        }    
    else{
        res.writeHead(404, {
        'Content-type': 'text/html',
        'my-own-header': 'hello world'
    });
        res.end('<h1>This page could not be found</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening to request on the port 8000')
});