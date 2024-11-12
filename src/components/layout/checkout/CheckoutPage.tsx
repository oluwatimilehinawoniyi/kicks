import CartItemList from "@/components/UI/Cart/CartItemList";
import DeliveryOptions from "./DeliveryOptions";
import styles from './checkoutStyles.module.css'
import OrderSummary from "@/components/UI/OrderSummary/OrderSummary";
import CartItem from "@/components/UI/Cart/CartItem";

import { useForm, SubmitHandler } from "react-hook-form"
import InputForm from "@/components/UI/Input/InputForm";
import Button from "@/components/common/Button/Button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

export interface IFormInput {
    firstName: string;
    lastName: string;
    email: string;
    homeAddress: string;
}

export default function CheckoutPage() {

    const [pickup, setPickUp] = useState<boolean>(false)

    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

    return (
        <div className={styles.checkout}>
            <div className={styles.orderSummaryContainer}>
                <CartItemList style={{ padding: "1rem", borderRadius: "1rem" }}>
                    <h1 style={{}}>Order Details</h1>
                    <CartItem
                        includeEditableQuantity={false} includeTrashIcon={false} />
                </CartItemList>
                <div className={styles.orderSummary}>
                    <OrderSummary bgColor="white" />
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.customerDetails}>

                <DeliveryOptions setPickUp={setPickUp} />

                <h1 style={{ marginBottom: "1rem" }}>{pickup ? "Contact Details" : "Shipping Address"}</h1>
                <div className={styles.shippingAddress}>
                    <InputForm
                        type="text"
                        placeholder="first name"

                        {...register("firstName", { required: "true" })}

                        aria-invalid={errors.firstName ? "true" : "false"}
                    />
                    {errors.firstName?.type === 'required' && <p role="alert" className={styles.errMsg}>First name is required</p>}


                    <InputForm
                        type="text"
                        placeholder="last name"
                        {...register("lastName", { required: "true" })}
                        aria-invalid={errors.lastName ? "true" : "false"}
                    />
                    {errors.lastName?.type === 'required' && <p role="alert" className={styles.errMsg}>Last name is required</p>}


                    <InputForm
                        type="email"
                        placeholder="email"
                        {...register("email", { required: "true" })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === 'required' && <p role="alert" className={styles.errMsg}>Email is required</p>}

                    {
                        !pickup &&
                        <>
                            <InputForm
                                type="text"
                                placeholder="home address"
                                {...register("homeAddress", { required: "true" })}
                                aria-invalid={errors.homeAddress ? "true" : "false"}
                            />
                            {errors.homeAddress?.type === 'required' && <p role="alert" className={styles.errMsg}>Home Address is required</p>}
                        </>
                    }
                </div>

                <Button style={{
                    backgroundColor: "var(--dark-gray)", width: "auto",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                }}>
                    <p>
                        review and pay
                    </p>
                    <ArrowRight />
                </Button>
            </form>

        </div>
    )
}
