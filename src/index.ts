import express,{Application,Request,Response,NextFunction} from 'express';
// rest of the code remains same
const app:Application = express();
const PORT:number = 8000;
app.get('/', (req:Request, res:Response,next:NextFunction) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});