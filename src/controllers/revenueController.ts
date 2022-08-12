import { Request, Response } from 'express';
import RevenueService from '../services/revenue/revenueService';

interface RevenuePost {
    descricao: string;
    valor: number;
    data: Date;
}

export default class RevenueController {
    constructor(private service: RevenueService) { }

    async createRevenue(req: Request, res: Response) {
        const { descricao, valor, data } = req.body as RevenuePost;

        if (!descricao || !valor || !data) {
            res.statusCode = 401;
            return res.json({
                erro: 'Informaçoes faltando para cadastro da receita!',
            });
        }

        try {
            await this.service.store({ descricao, valor, data });
            res.json({ sucess: 'Receita cadastrada com sucesso' });
        } catch (err) {
            res.statusCode = 401;

            return res.json({ err });
        }
    }
}
