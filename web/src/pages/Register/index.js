import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import './styles.css';

import logoImg from '../../assets/logo2.png';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const navigate = useNavigate();

    async function handleRegister(e) {
        e.preventDefault();

        const data = { name, email, whatsapp, city, uf };

        if (!name || !email || !whatsapp || !city || !uf) {
            return alert('Por favor, preencha todos os campos!');
        }

        try {
            console.log('Dados enviados:', data); // Verifica os dados enviados

            const response = await api.post('users', data);

            alert(`Cadastro realizado com sucesso! Seu ID de acesso: ${response.data.id}`);

            navigate('/'); // Redireciona para a página inicial
        } catch (err) {
            console.error('Erro no cadastro:', err.response?.data || err.message);
            alert('Erro no cadastro, tente novamente.');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Logotipo" />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ganhe seu cupom</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para a página inicial
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />

                    <input 
                        type="email" 
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade"
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />

                        <input 
                            placeholder="UF" 
                            style={{ width: 80 }}
                            maxLength={2} // Limita a 2 caracteres
                            value={uf}
                            onChange={e => setUf(e.target.value.toUpperCase())} // Converte para maiúsculas
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}
