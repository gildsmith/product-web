import ProductPage from './pages/ProductPage.vue'

export default [
    {
        name: 'products.index',
        path: '/product',
        redirect: '/',
    },
    {
        name: 'products.show',
        component: ProductPage,
        path: '/product/:id',
    }
]