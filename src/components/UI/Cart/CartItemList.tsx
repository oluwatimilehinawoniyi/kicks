import { ReactNode } from "react";
import styles from './cartitem.module.css'

export default function CartItemList({ children, style }: { children: ReactNode, style?: React.CSSProperties }) {
    return (
        <div className={styles.cartItems}
            style={style}
        > {children}</div >
    )
}
