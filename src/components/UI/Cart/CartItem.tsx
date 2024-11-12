import { Trash } from 'lucide-react'
import styles from './cartitem.module.css'

interface CartItemProps {
    includeTrashIcon: boolean;
    includeEditableQuantity: boolean;
}

export default function CartItem({ includeTrashIcon, includeEditableQuantity }: CartItemProps) {
    return (
        <div className={styles.cartItem}>
            <img src="/src/assets/images/new drops/product-1.png" alt="" />
            <div className={styles.cartItem_details}>
                <div className="">
                    <span className="" style={{
                        justifyContent: "space-between",
                        marginBlock: 0,
                    }}>

                        <h3>dropset trainer shoes</h3>

                        {includeTrashIcon && <Trash className={styles.trashItem} size={16} color='red' />}
                    </span>
                    <span>
                        <p>size: 45</p>
                        <p>colour: red/blue/yellow</p>
                    </span>
                </div>

                <div className="">
                    {includeEditableQuantity
                        ?
                        <span className={styles.quantity}>
                            <label htmlFor='quantity' >Quantity:</label>
                            <input type="number" name="quantity" id="quantity" className={styles.itemQuantity} />
                        </span>
                        :
                        <>
                            <p>Quantity: 10</p>
                        </>}

                    <p className={styles.price}>$130.00</p>
                </div>
            </div>
        </div>
    )
}
