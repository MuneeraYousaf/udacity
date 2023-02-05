import { Router, Request, Response } from 'express';
import imagerouter from './api/imageprocessing';

const routes = Router();

routes.use('/images', imagerouter);

routes.get('/', (req: Request, res: Response) => {
  res.send(
    `<h1 style="text-align:center"> Welcome to image processing APi  </h1><p style="text-align:center">Listening at <code><a href="/images" style="text-align:center">/images</a></code> Must include at least a valid filename. You can use both width and height to set the size it is optional...</p><p style="text-align:center">For Example:<ul style="text-align:center"><li><a href="/images?filename=fjord">/api/images?filename=fjord</a></li><li><a href="/images?filename=fjord&width=100&height=100">/images?filename=fjord&width=100&height=100</a></li></ul></p>`
  );
});

export default routes;
