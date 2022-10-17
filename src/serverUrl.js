const { NODE_ENV } = process.env;

export let serverUrl;

if(NODE_ENV === 'development') {
  serverUrl = 'http://localhost:3010' 
} else {
  serverUrl = 'https://madepc.onrender.com'; 
}
