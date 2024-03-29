const express = require('express');
const next = require('next');
var bodyParser = require('body-parser');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

const port = 80;

nextApp.prepare().then(() => {
    const app = express();

    app.use(bodyParser.json());

    app.post('/api/sendmail', (req, res) => {
        return handle(req,res)
    });

    app.get('*', (req, res) => {
        return handle(req, res);
    });

    app.listen(port, err => {
        if (err) throw err;
        console.log(`> Ready on localhost:${port}`);
    });
});