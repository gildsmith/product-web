import ProductsIndex from './pages/ProductsListPage.vue'
import {IconPackage} from '@tabler/icons-vue'

export default [
    {
        name: 'dashboard.products.index',
        component: ProductsIndex,
        path: '/products',
        meta: {
            name: 'Products List',
            description: 'Manage your product inventory, including pricing and stock levels',
            icon: IconPackage,
        },
    },
]