import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Dashboard from "../Componentes/Dashboard";
import Header from "../Componentes/header";
import Sidebar from "../Componentes/Sidebar";
import Footer from "../Componentes/Footer";
import Login from "../Componentes/login";

// Registra las escalas y elementos necesarios para el gráfico
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Home: React.FC = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const data = {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [
            {
                label: 'Ventas',
                data: [300, 500, 100, 700, 200, 400],
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Ventas Mensuales',
            },
        },
    };

    if (!isLoggedIn) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="d-flex" style={{ position: 'absolute', top: '0', width: '100%' }}>
            <Sidebar />
            <div className="flex-grow-1" style={{ backgroundColor: '#ffffff' }}> {/* Fondo blanco aquí */}
                <Header />
                <div className="container mt-4">
                    <h1>Bienvenido al Dashboard</h1>
                    <Dashboard />
                    
                    {/* Gráfica */}
                    <div className="mt-5">
                        <h2>Datos de Ventas</h2>
                        <Bar data={data} options={options} />
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
