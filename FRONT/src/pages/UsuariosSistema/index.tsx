import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useEffect, useState } from "react";

import { DeleteOutline, Edit } from "@mui/icons-material";
import { toast } from "sonner";
import api from "../../services/api";

function UsuariosSistema() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState<string | null>(null);
  const [users, setUsers] = useState<Users[]>([]);

  interface Users {
    id: string;
    name: string;
    email: string;
    perfil: string;
    password: string;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      if (editId) {
        await api.put(
          `/alterar/${editId}`,
          { name, email, perfil, password },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Usuário atualizado com sucesso!");
      } else {
        await api.post(
          "/cadastro",
          { name, email, password, perfil },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Usuário cadastrado com sucesso!");
      }

      setName("");
      setEmail("");
      setPassword("");
      setPerfil("");
      setEditId(null);
      getUsers();
    } catch (err) {
      toast.error(
        editId ? "Erro ao atualizar o usuário." : "Erro ao cadastrar o usuário."
      );
    }
  }

  async function getUsers() {
    try {
      const token = localStorage.getItem("token");
      const {
        data: { users },
      } = await api.get(`/listar?email=${search}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users);
    } catch (err) {
      toast.info("Não foi possível buscar os usuários!");
    }
  }

  async function deleteUsers(id: string) {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/deletar/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Usuário deletado com sucesso!");
      getUsers();
    } catch (err) {
      toast.error("Erro ao deletar usuário!");
    }
  }

  function handleEdit(user: Users) {
    setName(user.name);
    setEmail(user.email);
    setPerfil(user.perfil);
    setPassword(user.password);
    setEditId(user.id);
  }

  function handleSearch() {
    getUsers();
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      py={4}
      gap={4}
      padding={3}
    >
      <Paper elevation={3} sx={{ flex: 1, p: 4 }}>
        <Typography variant="h5" gutterBottom>
          {editId ? "Editar usuário" : "Cadastrar usuário"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <FormControl fullWidth margin="normal">
            <InputLabel id="perfil-label">Perfil</InputLabel>
            <Select
              labelId="perfil-label"
              value={perfil}
              onChange={(e) => setPerfil(e.target.value)}
              required
            >
              <MenuItem value="">Selecione uma opção</MenuItem>
              <MenuItem value="basico">Básico</MenuItem>
              <MenuItem value="adm">Administrador</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            {editId ? "Salvar alterações" : "Cadastrar"}
          </Button>
        </form>
      </Paper>

      <Paper elevation={3} sx={{ flex: 1, p: 4 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5">Lista de Usuários</Typography>
          <Box display="flex" gap={2}>
            <TextField
              label="Pesquisar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              size="small"
            />
            <Button onClick={handleSearch} variant="contained" color="success">
              Pesquisar
            </Button>
          </Box>
        </Box>

        {users.length === 0 ? (
          <Typography>Não há usuários cadastrados.</Typography>
        ) : (
          users
            .slice()
            .reverse()
            .map((usuario) => (
              <Paper
                key={usuario.id}
                sx={{
                  p: 2,
                  mb: 2,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography>
                    <strong>Nome:</strong> {usuario.name}
                  </Typography>
                  <Typography>
                    <strong>Email:</strong> {usuario.email}
                  </Typography>
                  <Typography>
                    <strong>Perfil:</strong> {usuario.perfil}
                  </Typography>
                </Box>

                <Box>
                  <IconButton
                    color="primary"
                    onClick={() => handleEdit(usuario)}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => deleteUsers(usuario.id)}
                  >
                    <DeleteOutline />
                  </IconButton>
                </Box>
              </Paper>
            ))
        )}
      </Paper>
    </Box>
  );
}

export default UsuariosSistema;
