import ProductLayout from "@/components/layout/ProductListContainer/ProductLayout";
import PromoHeaderImage from "@/components/UI/ShopHeader/PromoHeader";
import Layout from "@/Layout";


const Shoes = () => {

  return (
    <>
      <Layout>
        <PromoHeaderImage />
        <ProductLayout />
      </Layout>
    </>
  );
};

export default Shoes;
