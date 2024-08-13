const express = require('express');
const accountRoutes = require('./api/routes/accountRoutes');
const db = require('./infrastructure/database/postgresql');

const app = express();
app.use(express.json());

app.use('/api', accountRoutes);

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        // Verificar la conexión a la base de datos
        await db.query('SELECT NOW()');
        console.log('Conexión a la base de datos exitosa.');

        // Iniciar el servidor solo si la conexión a la base de datos es exitosa
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar con la base de datos:', error);
        process.exit(1);
    }
}

startServer();
