import { Express } from "express";
const app = Express();

PORT = 3000;

app.get("/" , (req , res) => {
   res.send("server pages are also visible bro");
});


app.post("/" , (req , res) => {
   res.send(req.body);
});


app.listen(PORT,`server started bro on ${PORT} `);
