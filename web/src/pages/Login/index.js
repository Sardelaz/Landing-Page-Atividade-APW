import React, {useState} from "react";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";

import logoImg from "../../assets/logo.png"; // Verifique se o caminho está correto
import fundo from "../../assets/fundo.png"; // Verifique se o caminho está correto

export default function Logon() {

    const [id, setId] = useState('')

    async function handleLogin(e) {
        e.preventDefault();
    
        try {
            const response = await api.post('sessions', { id });
            console.log(response.data); 
    
            localStorage.setItem('userId', id);
            localStorage.setItem('userName', response.data.name);
    
            alert('Seu cupom promocional é SilviaMeDa10');
        } catch (err) {
            console.error(err.response?.data || err.message); 
            alert('Falha no login, tente novamente');
        }
    }
    

    return (
        <div className="logon-container">
            
            {/* Formulário de login */}
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Ganhe seu cupom com seu id</h1>

                    {/* Input para a ID */}
                    <input 
                    placeholder="Sua ID"
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />

                    {/* Botão para entrar */}
                    <button className="button" type="submit">
                        Entrar
                    </button>

                    {/* Link para a página de registro */}
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#f0f0f5" />
                        <p>Não tenho cadastro</p>
                    </Link>
                </form>
            </section>

            {/* Imagem de destaque */}
            <img src={fundo} alt="background" />
        </div>
    );
}