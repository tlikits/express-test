import express, { Application, Request, Response, NextFunction } from 'express'
import * as path from 'path'
const app: Application = express()
const port = 80

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  console.log('====================')
  console.log('Incoming Request')
  console.log('====================')
  next()
})

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.sendFile(path.join(__dirname, 'sample/calendar.ics'))
})

app.get('/calendar/*', (req: Request, res: Response, next: NextFunction) => {
  const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl
  console.log('Serving Calendar.ICS over URL:', fullUrl)
  console.log('Headers:', req.headers)
  res.sendFile(path.join(__dirname, 'sample/calendar.ics'))
})

app.listen(port, () => console.log(`Server is listening on port ${port}!`))
