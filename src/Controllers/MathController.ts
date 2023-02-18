import express, { Request, Response, NextFunction } from "express";
import { validateNumbers } from "../Mildewares/Validation";
import { calculate } from "../Services/MathService";

const app = express();

app.use(express.json());

app.get("/calculate/:op", validateNumbers, calculate, (req, res) => {
  res.status(200).json({ result: req.result });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur le port ${PORT}`);
});
