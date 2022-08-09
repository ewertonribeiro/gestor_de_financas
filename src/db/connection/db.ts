import { Client } from 'pg';

const db = new Client({
    host: 'localhost',
    user: 'test',
    database: 'test',
    password: 'test',
    port: 5432,
});

async function connectDB() {
    try {
        await db.connect();

        console.log('DB Connected!');
    } catch (err) {
        console.log('Erro ao connecar no banco!', err);
    }
}

export { connectDB, db };
