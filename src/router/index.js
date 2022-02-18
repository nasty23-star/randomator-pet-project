import PrivateData from '@/components/PrivateData';
import {createRouter, createWebHistory} from 'vue-router';
import Home from '@/components/Home';
import Recommendation from '@/components/Recommendation';


//import App from '@/App'
//const { createWebHistory } = require("vue-router");


const routes = [
 
    { 
        path: '/back',
        component: Home
    },
   
   { 
        path: '/privatedata',
        component: PrivateData
    },
    {
        path: '/recommendation',
        component: Recommendation
    },
 
   
]

const router = createRouter({
    routes, 
    history: createWebHistory()
})

export default router;