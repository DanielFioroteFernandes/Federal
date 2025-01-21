import express from "express";

const router = express.Router();

// Cadastro de usuarios do sistema

router.post("/cadastro", async (req, res) => {
  const user = req.body;

  res.status(201).json(user);
});

export default router;
