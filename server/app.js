const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

app.use(express.static("dist"));

const items = [
    {    
        productName: "Laptop",
        price: 500,
    },
    {
        productName: "Desktop",
        price: 10000,
    },
];

app.get("/api", (req, res) => {
    res.send(items)
})