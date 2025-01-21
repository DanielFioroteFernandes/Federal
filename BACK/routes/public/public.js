import { PrismaClient } from "@prisma/client";
import express from "express";
import bcrytp from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET;

// Realizando login no sistema

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body;

    //Busca usuário no banco dedados
    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
    });

    //Verificado se usuário existe nobanco
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }

    // Comparada a senha dobanco coma do usuario digitol
    const isMatch = await bcrytp.compare(userInfo.password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: "Senha invalida" });
    }

    //Gerar Token JWT

    const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: "7d" });

    res.status(200).json(token);
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

export default router;
