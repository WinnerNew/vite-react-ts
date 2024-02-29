import { Routes, Route, Navigate } from "react-router-dom";
import Home from "@/view/Home";
import Layout from "@/layout";
import Center from "@/view/Center";
import About from "@/view/About";
import Login from "@/view/Login";

// const Home = lazy(() => import("@/view/Home"));
// const Center = lazy(() => import("@/view/Center"));
// const About = lazy(() => import("@/view/About"));
// const Login = lazy(() => import("@/view/Login"));

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="center" element={<Center />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
