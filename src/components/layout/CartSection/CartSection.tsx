import Button from '@/components/common/Button/Button'
import styles from './CartSection.module.css'
import { Link } from 'react-router-dom'
import OrderSummary from '@/components/UI/OrderSummary/OrderSummary'
import CartItem from '@/components/UI/Cart/CartItem'
import CartItemList from '@/components/UI/Cart/CartItemList'

export default function CartSection() {
    return (
        <section className={styles.cartSection}>
            <div className={styles.cartText}>
                <h1 className="">
                    Saving to Celebrate
                </h1>
                <p className="">
                    Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last. No code needed.
                </p>
            </div>

            <div className={styles.carts}>
                <div className={styles.bag}>
                    <h1 className="">your bag</h1>
                    <p className="">Items in your bag are not reserved- checkout now to make them yours</p>

                    <CartItemList>
                        {
                            Array.from({ length: 3 }, (_, i) => (
                                <CartItem key={i} includeTrashIcon={true} includeEditableQuantity={true} />
                            ))
                        }
                    </CartItemList>
                </div>
                <div className={styles.orderSummary}>
                    <OrderSummary Button={
                        <Link to={"/checkout"}>
                            <Button style={{
                                // width: '100%',
                                backgroundColor: 'var(--dark-gray)'
                            }}>checkout</Button>
                        </Link>
                    } />
                </div>
            </div>
        </section>
    )
}