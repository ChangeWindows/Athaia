import Axios from 'axios';

const axios = Axios.create({
  baseURL: import.meta.env.ATHAIA_BACKEND_URL,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  withCredentials: true
});

export { axios };
