import AboutProduct from "@/components/layout/AboutProduct/AboutProduct";
import Recommendation from "@/components/layout/Recommendation/Recommendation";
import Layout from "@/Layout";
// import { useParams } from "react-router-dom"

export default function Shoe() {
    // const { name } = useParams();
    return (
        <Layout>
            <AboutProduct />
            <Recommendation />
        </Layout>

    )
}
