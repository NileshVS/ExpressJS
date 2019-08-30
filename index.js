const express = require('express');
const app = express();

let users = [{
    id:1,
    name:'Nilesh'
},
{
    id:2,
    name:'Kamal'
},
{
    id:3,
    name: 'Vasant'
},
{
    id:4,
    name:'Ashish'
}
];
app.get('/api/users',(req,res) => {
    res.send(users);
});

app.get('/api/users/:id', (req,res) => {
    // let idPara = req.params.id;
    // res.send(` The ID of the current user is ${idPara}.`);
    let checkUserId = users.find(item => item.id === parseInt(req.params.id));
    if(!checkUserId){
        res.status(403).send('Invalid user ID')
    }
    else{
        let currentUser=checkUserId;
        res.send(currentUser);
    }
});

app.listen(4000, () => console.log('Server is running at localhost:4000'));