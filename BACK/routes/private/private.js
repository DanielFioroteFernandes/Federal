import express from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();
const router = express.Router();

// Cadastro de usuarios do sistema

router.post("/cadastro", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(user.password, salt);

    const userBD = await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        perfil: user.perfil,
        password: hashPassword,
      },
    });

    res.status(201).json(userBD);
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor" });
  }
});

router.get("/listar", async (req, res) => {
  try {
    const users = await prisma.user.findMany({ omit: { password: true } });

    res.status(200).json({ message: "success", users });
  } catch (err) {
    res.status(500).json({ message: "Falha no servidor" });
  }
});

export default router;
