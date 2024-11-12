import { ReactNode } from 'react'
import styles from './orderSummary.module.css'


export default function OrderSummary({ Button, bgColor = "transparent" }: { Button?: ReactNode, bgColor?: string; }) {
    return (
        <div className={styles.summary} style={{
            backgroundColor: bgColor, borderRadius: bgColor === "transparent" ? "none" : "1rem"
        }}>
            <h1>order summary</h1>
            <div className={styles.receipt}>
                <span className="">
                    <p>{ } item</p>
                    <p className="">$130.00</p>
                </span>
                <span className="">
                    <p>delivery</p>
                    <p className="">$6.99</p>
                </span>
                <span className="">
                    <p>total</p>
                    <p className="">$136.99</p>
                </span>
            </div>

            {Button}
        </div>
    )
}
