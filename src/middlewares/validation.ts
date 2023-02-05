import { Request, Response, NextFunction } from 'express';

interface ImageQuery {
  filename?: string;
  width?: string;
  height?: string;
}
export const validation = async (
  query: ImageQuery,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { filename } = req.query;

  if (!filename) return res.status(404).send('Yous should include filename');
  if (!query.width && !query.height) {
    return null;
  }
  const width: number = parseInt(query.width || '');
  if (Number.isNaN(width) || width < 1) {
    return "Please make sure url contains correct width";
  }
  const height: number = parseInt(query.height || '');
  if (Number.isNaN(height) || height < 1) {
    return "Please make sure url contains correct filename, height.";
  }
  // return null
  next();
};
