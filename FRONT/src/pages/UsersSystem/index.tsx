// Mui
import { Add, DeleteOutline, Edit } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid2,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

//API
import api from "../../services/api";

// react

import React, { useEffect, useState } from "react";

// mensagems sonner
import { toast } from "sonner";

function UsersSystem() {
  // Meus States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");

  const [editId, setEditId] = useState<string | null>(null);
  const [users, setUsers] = useState<Users[]>([]);

  //modal

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Interface
  interface Users {
    id: string;
    name: string;
    email: string;
    perfil: string;
    password: string;
  }

  //funções para backend

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Token não encontrado. Por favor, faça login novamente.");
      return;
    }

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

      resetForm();
      getUsers();
    } catch (err) {
      toast.error(
        editId ? "Erro ao atualizar o usuário." : "Erro ao cadastrar o usuário."
      );
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setPerfil("");
    setEditId(null);
  }

  async function getUsers() {
    const token = localStorage.getItem("token");

    try {
      const response = await api.get("/listar", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(response.data.users || []);
    } catch (err) {
      toast.error("Não foi possível buscar os usuários!");
    }
  }

  async function deleteUsers(id: string) {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Token não encontrado. Por favor, faça login novamente.");
      return;
    }

    try {
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
    setPassword(user.password); // Não preenche o campo de senha ao editar por segurança
    setEditId(user.id);
    handleOpen();
  }

  useEffect(() => {
    getUsers();
  }, []);

  // função para paginação
  const columns: GridColDef[] = [
    { field: "name", headerName: "Nome", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "perfil", headerName: "Perfil", flex: 1 },
    {
      field: "actions",
      headerName: "Ações",
      sortable: false,
      renderCell: (params) => (
        <Grid2 container spacing={1}>
          <Grid2>
            <IconButton
              color="primary"
              onClick={() => handleEdit(params.row as Users)}
            >
              <Edit />
            </IconButton>
          </Grid2>
          <Grid2>
            <IconButton
              color="error"
              onClick={() => deleteUsers(params.row.id)}
            >
              <DeleteOutline />
            </IconButton>
          </Grid2>
        </Grid2>
      ),
      flex: 0.5,
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ padding: 1, marginTop: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "8px 16px",
          borderTop: "1px solid rgba(224, 224, 224, 1)",
        }}
      >
        <span>Usuários do sistema</span>
        <IconButton color="primary" aria-label="add" onClick={handleOpen}>
          <Add />
        </IconButton>
      </Box>
      <Paper elevation={3}>
        <Box sx={{ height: "100%", width: "100%, padding: 30" }}>
          <DataGrid
            rows={users.map((user) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              perfil: user.perfil,
            }))}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 6,
                },
              },
            }}
            disableRowSelectionOnClick
            pageSizeOptions={[5]}
            rowHeight={40} // Define a altura de cada linha
            sx={{
              "& .MuiDataGrid-columnHeaders": {
                minHeight: 40, // Altura do cabeçalho das colunas
              },
              "& .MuiDataGrid-cell": {
                padding: "4px 8px", // Reduz o espaçamento interno das células
              },
            }}
          />
        </Box>
      </Paper>
      {/* modal */}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "Translate(-50%, -50%)",
            width: "400",
            bgcolor: "Background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cadastrar usuários
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Cadastre novos usuários para utilizar sistema.
          </Typography>

          {/* Formulário */}

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
              required={!editId} // Senha obrigatória apenas no cadastro
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
              {editId ? "Salvar alterações" : "Cadastrar"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}

export default UsersSystem;
