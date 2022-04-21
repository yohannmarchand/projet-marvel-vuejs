import axios from "axios";

export default axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts: 1,
    apiKey: '88007a8145e262368c2b6869153f5220',
    hash: '9fe15e8d2ef4feba8659b6d062c1dfdd',
  }
})