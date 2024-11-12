import styles from './checkoutStyles.module.css'

interface DeliveryOptionsProps {
  setPickUp: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DeliveryOptions({ setPickUp }: DeliveryOptionsProps) {
  return (
    <div>
      <h1 style={{ marginBottom: "0rem" }}>Delivery Option</h1>

      <div className={styles.deliveryOption}>
        <label
          className={styles.optionCard}
          onClick={() => setPickUp(false)}
        >
          <input type="radio" name="deliveryOption" value="standard" defaultChecked />
          <div className={styles.content}>
            <span>
              <h2>Standard Delivery</h2>
              <p>$6.00</p>
            </span>
            <p>Enter your address to see when you'll get your order</p>
          </div>
        </label>

        <label
          className={styles.optionCard}
          onClick={() => setPickUp(true)}
        >
          <input type="radio" name="deliveryOption" value="collect" />
          <div className={styles.content}>
            <span>
              <h2>Collect in store</h2>
              <p>Free</p>
            </span>
            <p>Pay now and collect in store</p>
          </div>
        </label>
      </div>
    </div>
  )
}
