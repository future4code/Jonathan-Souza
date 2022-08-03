import { app } from "./controller/app";
import { userRouter } from "./controller/route/userRoute";

app.use("/user", userRouter);
