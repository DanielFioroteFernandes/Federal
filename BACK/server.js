import express from "express";
import privateRoutes from "./routes/private/private.js";

const app = express();
app.use(express.json());

app.use("/", privateRoutes);

app.listen(3000, () => console.log("Servidor Rodando"));
