import type { Request, Response } from 'express'
export const renderHomepage = (req: Request, res: Response) => {
  res.render('index')
}
