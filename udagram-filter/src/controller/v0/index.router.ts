import { Router, Request, Response } from 'express';
import { FilterRoute } from './filter/routes/filter.router';
import { filterImageFromURL, deleteLocalFiles } from '../../util/util'


const router: Router = Router();

router.use('/filteredimage', FilterRoute);

router.get('/', async (req: Request, res: Response) => {    
    res.send(`V0`);
});

export const IndexRouter: Router = router;
