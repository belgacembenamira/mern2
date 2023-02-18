import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use(express.json());

// middleware pour valider les nombres
const validateNumbers = (req: Request, res: Response, next: NextFunction) => {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  const op = req.params.op;

  if (op == "div" && num2 == 0) {
    return res.status(400).json({ error: "division impossible sur zero" });
  }

  next();
};

export {validateNumbers}