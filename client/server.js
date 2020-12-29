import express from 'express';
import path from path;

const port = 8080;
const app = express();

app.use(express.static(path.resolve(__dirname, 'dist/index.html')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port, () => console.log(`Serving Client App on Port ${port}`));