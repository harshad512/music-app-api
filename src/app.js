const express = require('express');
const app = express();

const port = process.env.PORT || 8080;
app.use("/public/uploads", express.static('./public/uploads'));

const Router = require('./Router/musicRouter');

require('./config/dbConnection');
require('./models/musicSchema');

app.use(express.json());
Router(app);

app.listen(port, () => {
    console.log(`Connection is setup on port ${port}`);
});