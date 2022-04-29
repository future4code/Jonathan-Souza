import { app } from "./app";
import { getUsers } from "./endpoints/getUsers";
import { postProducts } from "./endpoints/postProducts";
import { postUsers } from "./endpoints/postUsers";

app.get("/users", getUsers)

app.post("/users", postUsers)

app.post("/products", postProducts)