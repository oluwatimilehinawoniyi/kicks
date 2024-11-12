import { useForm } from 'react-hook-form';
import styles from './checkoutStyles.module.css'
import InputForm from "@/components/UI/Input/InputForm";
import { IFormInput } from './CheckoutPage';

export default function ShippingAddress() {

  const { register } = useForm<IFormInput>();


  return (
    <form className={styles.shippingAddress}>
      <h1 style={{ marginBottom: "1rem" }}>Shipping Address</h1>
      <div>
        <InputForm type="text" placeholder="first name" required={true} {...register("firstName")} />

        <InputForm type="text" placeholder="last name" required={true} {...register("lastName")} />

        <InputForm type="email" placeholder="email" required={true} {...register("email")} />

        <InputForm type="text" placeholder="home address" required={true} {...register("homeAddress")} />
      </div>
    </form>
  )
}
