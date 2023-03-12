const express=require('express')
require('./config/DB')
const dotenv=require('dotenv')
const app=express();
dotenv.config();
const cors=require('cors')

const userRoutes=require('./routes/UserRoutes')



//app.get('/',(req,res)=>{res.send('hi')})

//app.get('/api/users',(req,res)=>{res.send('users')});
//app.post('api/add',()=>{return "hi"})
app.use(express.json());
app.use(cors())
app.use('/api',userRoutes);
//const PORT=process.env.PORT ||5000;
app.listen(5000,console.log('server statred at port 5000'));