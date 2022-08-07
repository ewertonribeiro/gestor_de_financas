import { AppDataSource } from './data-source';

async function connectDB() {
    await AppDataSource.initialize();
    console.log('DB Connected');
}

try {
    connectDB();
} catch (err) {
    console.log(err);
}
