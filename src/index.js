import express from 'express';
import cors from 'cors';
import canonize from './canonize';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World!!!',
  });
});

app.get('/task2A', (req, res) => {
  const summ = (+req.query.a || 0)+ (+req.query.b || 0);
  res.send(summ.toString());
});

app.get('/task2B', (req, res) => {


const arr_name = req.query.fullname.split(' ');

if (arr_name.length==3)
var res_name = arr_name[2]+' '+arr_name[0].substring(0,1) + '. '+arr_name[1].substring(0,1)+'.';

if (arr_name.length==2)
var res_name = arr_name[1]+' '+arr_name[0].substring(0,1) + '.';

if (arr_name.length==1)
var res_name = arr_name[0];

if (arr_name.length>3||arr_name[0]=="")
var res_name = 'Invalid fullname';

res.send(res_name);
});

app.get('/task2C', (req, res) => {
  const url = req.query.username;
  res.send(canonize(url).toString());
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
