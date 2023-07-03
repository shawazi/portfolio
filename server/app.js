const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("Server started"));

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

app.get("/api/items", (req, res) => {
    res.send(items)
})