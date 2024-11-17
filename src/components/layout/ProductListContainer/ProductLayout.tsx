import DesktopFilterTab from '@/components/UI/FilterTab/DesktopFilterTab'
import styles from './productLayout.module.css'
import ProductListContainer from './ProductListContainer'

export default function ProductLayout() {

    return (
        <section className={styles.productLayout}>
            <DesktopFilterTab />
            <ProductListContainer />
        </section>
    )
}
