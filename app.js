import express from 'express';
import cors from 'cors'
import HelloController from "./controllers/hello-controler.js";
import UserController from "./controllers/users/users-controllers.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";

const app = express();
app.use(cors())
// parse JSON from HTTP request body
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);

app.listen(process.env.PORT|| 4000);