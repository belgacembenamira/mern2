import express, { Request, Response, NextFunction } from "express";
const app = express();

app.use(express.json());

const calculate = (req: Request, res: Response, next: NextFunction) => {
  var num1 = Number(req.query.num1);
  var num2 = Number(req.query.num2);
  const op = req.params.op;
  var result;

  switch (op) {
    case "add":
      result = num1 + num2;
      break;
    case "sous":
      result = num1 - num2;
      break;
    case "mult":
      result = num1 * num2;
      break;
    case "div":
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({
        error: "L'opérateur doit être l'un des suivants : +, -, *, /",
      });
  }
  res.status(200).json({ result });
  next();
};
export { calculate };
