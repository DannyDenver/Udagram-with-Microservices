import { Router, Request, Response } from 'express';
import { filterImageFromURL, deleteLocalFiles } from '../../../../util/util'

const router: Router = Router();


router.get("/", async (req: Request, res: Response) => {  
    let imageUrl = req.query.image_url;

    if (!imageUrl) {
      return res.status(400).send({ message: 'Please add image url.'});
    }

    try {
      let image = await filterImageFromURL(imageUrl)
      res.on('finish', () => deleteLocalFiles([image]));
      return res.status(201).sendFile(image)
    } catch(err) {
      res.status(400).send({ message: err})
   }
  }
)

router.get('/test', async (req: Request, res: Response) => {
  return res.status(200).send('testing');
})

  export const FilterRoute: Router = router;