import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (event) => {
    const setValue = new Map([
      ['email', setEmail],
      ['password', setPassword],
    ]).get(event.target.name);

    setValue(event.target.value);
  };

  const handleSubmit = () => {

  };

  const handleRegister = () => {

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" value={email} onChange={handleChange} />
      </label>
      <label>
        Senha:
        <input type="password" name="password" value={password} onChange={handleChange} />
      </label>
      <input type="submit" value="Entrar" />
      <button type="button" name="Cadastrar" onClick={handleRegister}>
        <label>
          Cadastrar
        </label>
      </button>
    </form>
  );
};

export default LoginForm;
