import { Router } from 'express';
import { revenueControler } from '../controllers';

const routes = Router();

routes.get('/', (_, res) => {
    res.json('Hello world');
});

routes.post('/receitas', (req, res) =>
    revenueControler.createRevenue(req, res)
);

export { routes };
