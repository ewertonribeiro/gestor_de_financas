import { db, connectDB } from '../connection/db';

class ExpenseRevenueMigration {
    private tableName:string;

    constructor( tableName:string){
        this.tableName = tableName;

    }
    async createTable() {
        await connectDB();

        await db.query(`CREATE TABLE IF NOT EXISTS ${this.tableName} (
            id SERIAL PRIMARY KEY,
            descricao VARCHAR(50) NOT NULL,
            valor INT NOT NULL,
            date DATE
        );`);

        console.log(`Table ${this.tableName} Created!`)
        await db.end();
    }

    async dropTabel() {
        await connectDB();

        await db.query(`DROP TABLE IF EXISTS ${this.tableName};`);

        console.log(`Table ${this.tableName} Dropped!`)
        await db.end();
    }

    
}

const migration = new ExpenseRevenueMigration('expenses');

migration.createTable();
// migration.dropTabel()
