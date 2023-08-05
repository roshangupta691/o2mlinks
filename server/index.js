const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const {registerUser, loginUser} = require('./controllers/auth');
const {dashBoardData} = require('./controllers/dashboard');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/o2mlinks").then(()=>{console.log("MongoDB connected")}).catch(err=>{console.log(err)});

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.post('/api/register',registerUser);
app.post('/api/login',loginUser);

app.post('/data/dashboard', dashBoardData);
app.get('/get/:handle', getUserData);

app.post('/save/socials', saveSocials)
app.post('/save/profile', saveProfile)
app.post('/save/links', saveLinks)
app.post('/load/socials', loadSocials)
app.post('/load/links', loadLinks)

const port = process.env.PORT || 8000;

app.listen(port,()=> {
    console.log(`server running on port ${port}`);
})