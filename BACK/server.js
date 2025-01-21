import express from "express";
import privateRoutes from "./routes/private/private.js";
import publicRoutes from "./routes/public/public.js";

import auth from "./middlewares/auth.js";

const app = express();
app.use(express.json());

// Rota Publicas
app.use("/", publicRoutes);

// Rota privadas

app.use("/", auth, privateRoutes);

app.listen(3000, () => console.log("Servidor Rodando"));

// danielfiorote
// Q68Ir2v2kxrIUoxM
// mongodb+srv://danielfiorote:<db_password>@cluster0.2neho.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
