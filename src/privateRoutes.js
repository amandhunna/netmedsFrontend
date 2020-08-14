import Cart from "./pages/cart";
import Orders from './pages/order';
import Payment from "./pages/payment";

const routes = [
    {
        path: '/',
        titleComponents: { title: 'Test', component: ["search", "cart"] },
        component: Orders,
    },
    {
        path: '/cart',
        titleComponents: { title: 'Your cart', component: ["payment"] },
        component: Cart,
    },
    {
        path: '/payment',
        titleComponents: { title: 'Your cart', component: [] },
        component: Payment,
    },
];

export default routes
