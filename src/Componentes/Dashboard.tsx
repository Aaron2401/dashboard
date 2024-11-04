import React from 'react';
import CardComponent from './CardComponent';
 
 


const Dashboard: React.FC = () => {
    return (
        <div className="d-flex flex-wrap">
            <CardComponent title="Estadísticas de Ventas" content="Ventas totales: $10,000" />
            <CardComponent title="Usuarios Activos" content="Total de usuarios: 500" />
            <CardComponent title="Tareas Pendientes" content="Tareas restantes: 5" />
            <CardComponent title="Ingresos Mensuales" content="Ingresos: $2,000" />
        </div>
    );
};

export default Dashboard;
