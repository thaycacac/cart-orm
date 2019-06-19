import { Database } from '@vuex-orm/core'
import User from '@/models/User'
import Order from '@/models/Order'
import OrderItem from '@/models/OrderItem'
import Product from '@/models/Product'

const database = new Database()

database.register(User, {})
database.register(Order, {})
database.register(Product, {})
database.register(OrderItem, {})

export default database