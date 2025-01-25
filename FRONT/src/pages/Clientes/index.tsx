import { Delete as DeleteIcon, Edit as EditIcon } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

interface Cliente {
  nome: string;
  endereco: string;
  telefone: string;
  email: string;
  cpf: string;
}

function Clientes() {
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [formData, setFormData] = useState<Cliente>({
    nome: "",
    endereco: "",
    telefone: "",
    email: "",
    cpf: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClientes([...clientes, formData]);
    setFormData({ nome: "", endereco: "", telefone: "", email: "", cpf: "" });
  };

  return (
    <Grid container spacing={4} style={{ height: "100vh", padding: 16 }}>
      {/* Formulário de Cadastro */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Cadastro de Cliente
            </Typography>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="CPF"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Endereço"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Cadastrar
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {/* Lista de Clientes */}
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="div" gutterBottom>
              Lista de Clientes
            </Typography>
            {clientes.length === 0 ? (
              <Typography>Não há clientes cadastrados.</Typography>
            ) : (
              clientes.map((cliente, index) => (
                <Card
                  key={index}
                  style={{ marginBottom: 16, backgroundColor: "#f9f9f9" }}
                >
                  <CardContent>
                    <Typography variant="h6">{cliente.nome}</Typography>
                    <Typography>Endereço: {cliente.endereco}</Typography>
                    <Typography>Telefone: {cliente.telefone}</Typography>
                    <Typography>Email: {cliente.email}</Typography>
                    <Typography>CPF: {cliente.cpf}</Typography>
                  </CardContent>
                  <CardActions>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="secondary">
                      <DeleteIcon />
                    </IconButton>
                  </CardActions>
                </Card>
              ))
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Clientes;
