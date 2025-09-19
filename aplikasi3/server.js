const express = require('express');
const app = express();
const port = 3000;

// Menyajikan file statis dari folder 'public'
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server running at http://localhost:3000/`);
});