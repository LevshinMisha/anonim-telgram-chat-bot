export default () => {
  require('http').createServer((req, res) => {
    res.write(req.url === '/ping' ? 'pong' : 'Hello World!');
    res.end();
  }).listen(8080);
  
  setInterval(() => fetch('tave-anonim-chat-telegram-bot.now.sh'), 5 * 60 * 1000);
}

