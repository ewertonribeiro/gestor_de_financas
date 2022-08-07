import { Router } from 'express';

const routes = Router();

routes.get('/', (_, res) => {
    res.json('Hello world');
});

export { routes };
