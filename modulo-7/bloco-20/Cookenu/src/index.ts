import { userRouter } from './controller/routes/userRoute';
import { app } from "./app";

app.use("/user", userRouter);