let hello = alert("It works");
const url = "GET https://api.linkedin.com/v2/search?q=companiesV2"; 
fetchurl()
     .then(res => {
            console.log(res);
})
      .catch(err => {
             console.log('Error: ${err}' ); 
});

const accessToken = 'YOUR_ACCESS_TOKEN';
const options = {
  host: 'api.linkedin.com',
  path: '/v2/me',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'cache-control': 'no-cache',
    'X-Restli-Protocol-Version': '2.0.0'
  }
};


