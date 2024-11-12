import Header from "@/components/UI/Header/Header";
import styles from "./Reviews.module.css";
import Review from "@/components/common/Review/Review";

const reviews = [
  {
    title: "Great Product!",
    comment: "Top-notch quality and perfect design!",
    customerImgSrc: "/src/assets/images/reviews-profile/Ellipse 1-1.png",
    productImgSrc: "/src/assets/images/reviews/image 38-1.png",
    rate: 4,
  },
  {
    title: "Excellent Quality",
    comment: "The material is durable and the design is comfortable.",
    customerImgSrc: "/src/assets/images/reviews-profile/Ellipse 1-2.png",
    productImgSrc: "/src/assets/images/reviews/image 38-2.png",
    rate: 5,
  },
  {
    title: "Impressive Fit",
    comment: "The sizing is convenient for me and the fit is perfect.",
    customerImgSrc: "/src/assets/images/reviews-profile/Ellipse 1.png",
    productImgSrc: "/src/assets/images/reviews/image 38.png",
    rate: 3,
  },
];

const Reviews = () => {
  return (
    <section className={styles.reviews}>
      <Header title="reviews" />

      <div className={styles.review_box}>
        {reviews.map((review, index) => (
          <Review key={index} {...review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
