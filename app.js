const express = require('express');
const {exec} = require('child_process');

const app = express();

app.use('/', (req, res) => {
    res.send('Hello From the Node layer');
});


exec('sh run.sh', (err, stdout) => {
    if (err) {
        console.error(`exec error: ${err}`);
        return;
    }

    console.log(`${stdout}`);
});
