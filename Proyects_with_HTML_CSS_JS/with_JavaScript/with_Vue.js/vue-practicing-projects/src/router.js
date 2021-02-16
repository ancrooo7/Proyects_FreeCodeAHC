import { createRouter, createWebHistory } from 'vue-router';
import ListBooks from './pages/ListBooks'
import Calendar from './pages/Calendar'
import Home from './pages/Home'
import Markdown from './pages/Markdown'

const routes = [
    { 
        path: '/',
        component: Home
    },
    { 
        path: '/list-books',
        component: ListBooks
    },
    { 
        path: '/calendar',
        component: Calendar
    },
    { 
        path: '/markdown',
        component: Markdown
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;