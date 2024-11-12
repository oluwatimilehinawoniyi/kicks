import Categories from "@/components/layout/Home/Categories/Categories";
import Hero from "@/components/layout/Home/Hero/Hero";
import NewDrops from "@/components/layout/Home/NewDrops/NewDrops";
// import Reviews from "@/components/layout/Home/Reviews/Reviews";
import Layout from "@/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <NewDrops />
      <Categories />
      {/* <Reviews /> */}
    </Layout>
  );
};

export default Home;
