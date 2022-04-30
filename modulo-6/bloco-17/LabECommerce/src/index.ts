import { app } from "./app";
import { getProducts } from "./endpoints/getProducts";
import { getUsers } from "./endpoints/getUsers";
import { postProducts } from "./endpoints/postProducts";
import { postPurchase } from "./endpoints/postPurchase";
import { postUsers } from "./endpoints/postUsers";

app.get("/users", getUsers)

app.get("/products", getProducts)

app.post("/users", postUsers)

app.post("/products", postProducts)

app.post("/purchase", postPurchase)