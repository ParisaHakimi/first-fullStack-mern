const express=require('express')
const cors=require('cors')
const app=express()
const PORT=8000
app.use(cors())
// const AllpersonRoutes=require('./routes/person.routes')
// AllpersonRoutes(app)


app.listen(PORT,console.log(`server is listening on port ${PORT}`))