const express = require('express');
const path = require('path');

const port = 8080;
const app = express();

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`Serving Client App on Port ${port}`));
