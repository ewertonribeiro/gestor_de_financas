import { db } from '../../db/connection/db';
import Revenue from '../../db/entities/revenue';

interface RevenuePost {
    descricao: string;
    valor: number;
    data: Date;
}

export default class RevenueService {
    async store({ valor, descricao, data }: RevenuePost): Promise<Revenue> {
        await db.connect();

        const newRevenue = new Revenue(valor, descricao, data);

        //Verificar se a descrição ja existe neste mês

        const revenue =
            await db.query<Revenue>(`INSERT INTO revenue (valor , descricao , date)
                                VALUES(
                                    '${newRevenue.valor}',
                                    '${newRevenue.descricao}',
                                    '${newRevenue.date}'
                                )`);

        await db.end();

        return revenue.rows[0];
    }

    private async verifyDate(date:Date , descricao:string){
        console.log(date , descricao)
    }
}
