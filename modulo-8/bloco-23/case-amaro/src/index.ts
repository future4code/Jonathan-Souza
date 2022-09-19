import { productRouter } from './controller/route/productRoute';
import { app } from "./controller/app";
import { userRouter } from "./controller/route/userRoute";

app.use("/user", userRouter);
app.use("/product", productRouter)