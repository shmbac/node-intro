const http = require('http');
const fs = require('fs');

http.createServer((request, response)=> {
    if(request.url === '/write'){
    fs.writeFile('data.txt', 'Shmulik', (err) => {
        if(err){
            console.log(err);
            response.end();
            return;
        }
        response.write('File created!');
        response.end();
    });
}else if(request.url === '/delete'){
fs.unlink('data.txt', (err) => {
    if(err){
        console.log(err);
        response.end();
        return;
    }
    response.write('File deleted!');
    response.end();
});
}else if(request.url === '/dice'){
    let num = Math.floor(Math.random() * 6 + 1);
    if(num === 4){
        response.write('You won!');
        response.end();
        return;
    }
    console.log(num);
    response.write('You lost!');
    response.end();

}else{
    response.write('Unaothorized');
    response.end();
}

}).listen(8080);

console.log('Listening on: http://localhost:8080');