require('dotenv').config()

const axios = require('axios');

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: process.env.BACKEND_URL,
  headers: { 
    'Authorization': process.env.AUTH, 
    'Cookie': process.env.COOKIE
  }
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
