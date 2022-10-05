import { Express } from "express";
const app = Express();

app.get('/',function(req,res){
  res.send('Hellow Client");
});

app.listen(3000,'server started bro');
