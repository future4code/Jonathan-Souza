import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByType } from "./endpoints/getUserByType";
import { getUserOrder } from "./endpoints/getUserOrder";

app.get("/users", getAllUsers)

app.get("/users/:type", getUserByType)

app.get("/users/sort/:sort", getUserOrder)