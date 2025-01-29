// Mui
import { Add, DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  FormControl,
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

// API
import api from "../../services/api";

// React
import React, { useEffect, useState } from "react";

// Mensagens Sonner
import { toast } from "sonner";

function Users() {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [perfil, setPerfil] = useState("");

  const [users, setUsers] = useState<Users[]>([]);
  const [open, setOpen] = useState(false);

  // Interface
  interface Users {
    id: string;
    name: string;
    email: string;
    perfil: string;
    password: string;
  }

  // Funções para backend
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Token não encontrado. Por favor, faça login novamente.");
      return;
    }

    try {
      await api.post(
        "/cadastro",
        { name, email, password, perfil },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Usuário cadastrado com sucesso!");
      resetForm();
      getUsers();
      setOpen(false);
    } catch (err) {
      toast.error("Erro ao cadastrar o usuário.");
    }
  }

  function resetForm() {
    setName("");
    setEmail("");
    setPassword("");
    setPerfil("");
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

  async function handleEdit(params: any) {
    const token = localStorage.getItem("token");
    const { id, name, email, perfil } = params.row;

    try {
      await api.put(
        `/alterar/${id}`,
        { name, email, perfil },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Usuário atualizado com sucesso!");
      getUsers();
    } catch (err) {
      toast.error("Erro ao atualizar o usuário.");
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  // Colunas da tabela
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Nome",
      flex: 1,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      editable: true,
    },
    {
      field: "perfil",
      headerName: "Perfil",
      flex: 1,
      editable: true,
    },
    {
      field: "actions",
      headerName: "Ações",
      sortable: false,
      renderCell: (params) => (
        <>
          <IconButton color="error" onClick={() => deleteUsers(params.row.id)}>
            <DeleteOutline />
          </IconButton>
        </>
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
        <IconButton
          color="primary"
          aria-label="add"
          onClick={() => setOpen(true)}
        >
          <Add />
        </IconButton>
      </Box>
      <Paper elevation={3}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={users.map((user) => ({
              id: user.id,
              name: user.name,
              email: user.email,
              perfil: user.perfil,
            }))}
            columns={columns}
            processRowUpdate={(newRow) => {
              handleEdit({ row: newRow });
              return newRow;
            }}
            experimentalFeatures={{ newEditingApi: true }}
            disableRowSelectionOnClick
            pageSizeOptions={[5]}
            rowHeight={40}
          />
        </Box>
      </Paper>

      {/* Modal para Cadastro */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" gutterBottom>
            Cadastrar Novo Usuário
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
              Cadastrar
            </Button>
          </form>
        </Box>
      </Modal>
    </Container>
  );
}

export default Users;
