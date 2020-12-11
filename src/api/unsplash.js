import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { Authorization: 'Client-ID OLHn1JH2Q9FzERiZGsRQdrSOlxURj8YwWoahPQ5UfgU' }
});