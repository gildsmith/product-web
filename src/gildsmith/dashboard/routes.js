import ProductsIndex from './pages/ProductsListPage.vue'
import {IconBarcode} from '@tabler/icons-vue'

export default [
    {
        name: 'dashboard.products.index',
        component: ProductsIndex,
        path: '/products',
        meta: {
            name: 'Products List', icon: IconBarcode
        }
    }
]