import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Button,
  CardActions,
  Alert,
  Collapse,
  Slide,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LoginIcon from "@mui/icons-material/Login";

import { useForm, Controller } from "react-hook-form";
import loginCardBg from "@/assets/login_card_bg.jpg";
import loginBg from "@/assets/login_bg.jpg";
export default function MultiActionAreaCard() {
  type FormType = {
    email?: string;
    password?: string;
    code?: string;
    confirmPassword?: string;
  };
  const { handleSubmit, control } = useForm();
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = React.useState(false);
  const [mode, setMode] = React.useState<"Login" | "Sigin">("Login");
  //   const [email, setEmail] = React.useState<string>("");
  //   const [code, setCode] = React.useState<string>("");
  //   const [password, setPassword] = React.useState<string>("");
  const toggleMode = () => {
    const newMode = mode === "Login" ? "Sigin" : "Login";
    setMode(newMode);
  };

  const onSubmit = (data: FormType) => {
    const { email, password } = data;
    console.log(email, password);
    if (
      mode === "Login" &&
      email === "775405088@qq.com" &&
      password == "941022..."
    ) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        navigate("/home");
      }, 2000);
    } else {
      if (data.password) {
        navigate("/home");
      }
    }
  };
  return (
    <div
      style={{
        background: `url(${loginBg})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Container maxWidth="sm">
        <Collapse in={showAlert}>
          <Alert severity="success">Login Success!</Alert>
        </Collapse>
        <Slide direction="up" in={true} mountOnEnter unmountOnExit>
          <Card
            sx={{ maxWidth: 300 }}
            style={{ margin: "150px auto", borderRadius: "10px" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardMedia
                component="img"
                height="200"
                image={loginCardBg}
                alt="green iguana"
              />
              <CardContent>
                <Box
                  component={"div"}
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                >
                  <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField label="email" required {...field} />
                    )}
                  ></Controller>
                  {mode === "Sigin" && (
                    <Controller
                      name="code"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField label="Code" required {...field} />
                      )}
                    ></Controller>
                  )}
                  <Controller
                    name="password"
                    control={control}
                    defaultValue=""
                    rules={{ required: true }}
                    render={({ field }) => (
                      <TextField
                        label="Password"
                        required
                        type="password"
                        autoComplete="current-password"
                        {...field}
                      />
                    )}
                  ></Controller>
                  {mode === "Sigin" && (
                    <Controller
                      name="confirmPassword"
                      control={control}
                      defaultValue=""
                      rules={{ required: true }}
                      render={({ field }) => (
                        <TextField
                          label="Confirm Password"
                          required
                          type="password"
                          autoComplete="current-password"
                          {...field}
                        />
                      )}
                    ></Controller>
                  )}
                </Box>
              </CardContent>
              <CardActions style={{ justifyContent: "flex-end" }}>
                <Button size="small" variant="outlined" onClick={toggleMode}>
                  {mode === "Login" ? "to Sigin" : "to Login"}
                </Button>
                <Button
                  size="small"
                  type="submit"
                  color="primary"
                  variant="contained"
                  endIcon={mode === "Login" ? <LoginIcon /> : <SendIcon />}
                >
                  {mode === "Login" ? "Login" : "Sigin"}
                </Button>
              </CardActions>
            </form>
          </Card>
        </Slide>
      </Container>
    </div>
  );
}
