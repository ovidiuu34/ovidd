const express = require('express');

const app = express();

app.get('/', (req,res) => {
	res.send('How are yoy doing');
});

app.listen(8080, () => {
	console.log('Listez pe portul 8080 ');
});
