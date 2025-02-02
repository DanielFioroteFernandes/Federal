import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import express from "express";

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
    const { name, email } = req.query;

    const filters = {};
    if (name) filters.name = { contains: name, mode: "insensitive" };
    if (email) filters.email = { contains: email, mode: "insensitive" };

    const users = await prisma.user.findMany({
      where: filters,
    });

    if (users.length === 0) {
      return res.status(404).json({ message: "Nenhum usuário encontrado." });
    }

    res
      .status(200)
      .json({ message: "Usuários encontrados com sucesso.", users });
  } catch (err) {
    res.status(500).json({ message: "Erro ao pesquisar usuários." });
  }
});

router.put("/alterar/:id", async (req, res) => {
  try {
    const user = req.body;

    const salt = await bcrypt.genSalt(10);

    const hashPassword = await bcrypt.hash(user.password, salt);

    const userBD = await prisma.user.update({
      where: {
        id: req.params.id,
      },
      data: {
        name: user.name,
        email: user.email,
        perfil: user.perfil,
        password: hashPassword,
      },
    });

    res.status(201).json(userBD);
  } catch (err) {
    res.status(500).json({ message: "Não foi possivel atualizar o usuário." });
  }
});

router.delete("/deletar/:id", async (req, res) => {
  try {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Usuário deletado com sucesso." });
  } catch (err) {
    res.status(500).json({ message: "Não foi possivel deletar o usuário." });
  }
});

// Pesquisar Usuaário

export default router;
