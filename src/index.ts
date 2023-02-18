import express, { NextFunction, Request, Response } from "express";

//const express = require('express');
const app = express();

app.use(express.json());

const verif = (req: Request, res: Response, next: NextFunction) => {
  var num1 = Number(req.params.num1);
  var num2 = Number(req.params.num2);
  if (num2 == 0) {
    return res.status(400).json({ message: "devision null impossible" });
  }
  next();
};

app.use("/calculer/:num1/:num2", verif, (req, res) => {
  //const { num1, num2 } = req.body;
  var num1 = Number(req.params.num1);
  var num2 = Number(req.params.num2);
  console.log(num1);
  console.log(num2);

  const resultat = {
    addition: num1 + num2,
    soustraction: num1 - num2,
    multiplication: num1 * num2,
    division: num1 / num2,
  };

  res.status(200).json({ resultat });
});
// http://localhost:4000/calculer/10/15
app.listen(4000, () => {
  console.log("server listening on 4000");
});
