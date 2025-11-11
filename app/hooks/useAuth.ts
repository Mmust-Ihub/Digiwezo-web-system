import { useState } from "react";

export function useAuth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const [isLogin, setIsLogin] = useState<boolean>(true);
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

  
   }

  return {
    handleSubmit,
    email,
    setEmail,
    password,
    setPassword,
    remember,
    setRemember,
    isLogin,
    setIsLogin,
    open,
    setOpen,
    loginOpen,
    setLoginOpen,
  };
}
