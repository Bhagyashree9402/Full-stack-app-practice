const express = require("express");
const app = express();
const PORT = 5000;

//own custom middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("./client/"));

const apiroutes = require("./route/api-route");
app.use(apiroutes);

const clientroutes = require("./route/client-route");
app.use("/", clientroutes);

const dataroutes = require("./route/data-route");
app.use(dataroutes);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);

});