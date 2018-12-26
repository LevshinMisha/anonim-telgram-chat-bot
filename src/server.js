import fetch from 'node-fetch';
import http from 'http';

export default () => {
  http.createServer((req, res) => {
    res.write(req.url === '/ping' ? 'pong' : 'Hello World!');
    res.end();
  }).listen(8080);
  
  setInterval(() => fetch('https://tave-anonim-chat-telegram-bot.now.sh/ping'), 5 * 60 * 1000);
}

