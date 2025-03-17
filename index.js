const express= require('express')
require('dotenv').config();
const app= express();
const cors= require('cors')

port=5000;
app.use(cors());
app.use(express.json())


app.get('/',(req,res)=>{
   res.send('Server is running')

})

app.listen(port,()=>{
console.log(`server is runnig at http://localhost:${port}`)
})

