const app = require('./app.js');

const port = process.env.PORT || 3090;
app.listen(port, () => console.log('Server on na 3090'))
