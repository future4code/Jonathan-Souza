import { recipeRouter } from './controller/routes/recipeRoute';
import { userRouter } from './controller/routes/userRoute';
import { app } from "./controller/app";

app.use("/user", userRouter);
app.use("/recipe", recipeRouter)