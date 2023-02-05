import { Router, Request, Response, query } from 'express';
import path from 'path';
// import { promises as fs } from "fs";
import { validation } from '../../middlewares/validation';

const sharp = require('sharp');
const route = Router();
route.get(
  '/',
  validation,
  async (req: Request, res: Response): Promise<void> => {
    const filename = req.query.filename;
    const width = req.query.width;
    const height = req.query.height;
    let filePath: string = '';

    const imagePath = path.join(
      __dirname,
      '../../../images/full',
      `${filename}.jpg`
    );
    const filePathThumbImage = path.resolve(__dirname, '../../../images/thumb');
    if (width && height) {
      filePath = path.resolve(
        filePathThumbImage,
        `${filename}_${width}x${height}.jpg`
      );
      await sharp(imagePath)
        .resize(Number(width), Number(height))
        .toFile(filePath);
      // filePath = m
      // res.sendFile();
    } else {
      filePath = path.resolve(imagePath);
      // res.sendFile(filePath);
    }
    try {
      // const paths: null | string = await filePath;
      // console.log(paths);
      // await fs.mkdir(filePath);
      // console.log(filePath)
      if (filePath) {
        res.sendFile(filePath);
      } else {
        res.status(404).send('Image not found');
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export default route;
