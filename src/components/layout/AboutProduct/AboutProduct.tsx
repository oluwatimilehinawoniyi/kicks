import { Heart } from 'lucide-react'
import styles from './AboutProduction.module.css'
import Button from '@/components/common/Button/Button'
import { useParams } from "react-router-dom"
import Choice from '@/components/UI/Choice/Choice';
import ColorChoice from '@/components/UI/ColourChoice/ColourChoice';
import useFetchShoes from '@/hooks/useFetchShoes';

const sizes = [
    { value: 38, available: false },
    { value: 39, available: false },
    { value: 40, available: false },
    { value: 41, available: false },
    { value: 42, available: false },
    { value: 43, available: false },
    { value: 44, available: false },
    { value: 45, available: false },
    { value: 46, available: false },
    { value: 47, available: false },
];


export default function AboutProduct() {
    const { name } = useParams();
    const { shoes } = useFetchShoes()


    const product = shoes.filter(shoe => shoe.name === name?.replaceAll('-', ' '))[0];

    const availableSizes = sizes?.map(item => {
        if (product?.size?.includes(item.value)) {
            item.available = true;
        }

        return item
    });



    return (
        <section className={styles.aboutProduct}>
            <div className={styles.imageHolder}>
                <img className={styles.mainImage} src={product?.imgSrc} alt="" />
                <img className={styles.imageOne} src="/src/assets/images/hero.png" alt="" />
                <img className={styles.imageTwo} src="/src/assets/images/hero.png" alt="" />
                <img className={styles.imageThree} src="/src/assets/images/hero.png" alt="" />
                <img className={styles.imageFour} src="/src/assets/images/hero.png" alt="" />
            </div>
            <div className={styles.productInfoContainer}>
                <div className={styles.productInfo}>
                    <div className={styles.newTag}>
                        <p>new release</p>
                    </div>
                    <h1 className={styles.title}>{name?.split('-').join(" ").toUpperCase()}</h1>
                    <p className={styles.price}>${product?.price}.00</p>

                    <div className="colorChoice">
                        <ColorChoice colours={product?.colors} />
                    </div>
                    <div className={styles.sizeChoice}>
                        <Choice role="size" sizes={availableSizes} width="100%" />
                    </div>
                    <div className={styles.CTA}>
                        <div className="">
                            <Button style={{
                                backgroundColor: 'var(--dark-gray)',
                                width: '100%'
                            }}>add to cart</Button>
                            <Button style={{
                                backgroundColor: 'var(--dark-gray)',
                            }}>
                                <Heart style={{
                                    transform: "translateY(2px)",
                                    fill: "var(--blue)",
                                    stroke: "var(--blue)"
                                }} />
                            </Button>
                        </div>
                        <Button
                            style={{
                                backgroundColor: 'var(--blue)',
                                width: '100%'
                            }}
                        >buy now</Button>
                    </div>
                </div>
                <div className={styles.productDescription}>
                    <h3 className=''>About the product</h3>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat eveniet maxime quaerat magni omnis earum qui, praesentium, harum iste, ea ducimus consequatur. Beatae quos, dicta rem alias quod consectetur earum? Molestiae doloribus pariatur mollitia, deserunt.
                    </p>
                </div>
            </div>
        </section>
    )
}
