import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [senha, setSenha] = React.useState("");
  const [erro, setErro] = React.useState(null);
  let mail = "leilacarla17.00@gmail.com";
  let password = "mateus";

  const openPage = () => {
    setOpen(true);
    if (mail === email && senha === password) {
      window.location = "https://datarespostas.vercel.app/login.html";
    } else {
      setErro(true);
      setOpen(false);
    }
  };

  const closePage = (e) => {
    setOpen(false);
    console.log("teus");
  };

  return (
    <div>
      <Button
        style={{ border: "none" }}
        variant="outlined"
        onClick={openPage}
      ></Button>
      <Dialog open={open} onClose={openPage}>
        <DialogTitle>Entra com sua conta</DialogTitle>
        <DialogContent>
          <DialogContentText>Login</DialogContentText>
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => setSenha(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Senha"
            type="password"
            fullWidth
            variant="standard"
          />
          {erro && (
            <div>
              <p style={{ color: "red" }}>Erro Usuario ou senha Incoreto </p>
            </div>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={closePage}>Cancel</Button>
          <Button onClick={openPage}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
