import { userRouter } from './routes/userRoute';
import { app } from "./app";

app.use("/user", userRouter);