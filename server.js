const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3010;

// Default
app.get('/', (req, res) => {
    res.sendfile('index.html', {root: 'build/es6prod/public'});
})

// Static path configuration
let staticPaths = [];
staticPaths.push('css');
staticPaths.push('components');
staticPaths.push('node_modules');
staticPaths.push('build');
staticPaths.push('public');
staticPaths.push('src/images');
staticPaths.push('');

staticPaths.forEach((x) => {
    app.use(`/${x}`, express.static(path.join(__dirname, 'build/es6prod/', x)));
});

app.listen(PORT);

console.info('');
console.info(`Application listening on http://127.0.0.1:${PORT}`);
console.info('');

staticPaths.forEach((x) => {
    console.info(`\tStatic files are served: ${x}`);
});

console.info('');
