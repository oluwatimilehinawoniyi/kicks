import StarRating from "../Star/Star";
import styles from "./review.module.css";

interface ReviewProps {
  title: string;
  comment: string;
  customerImgSrc: string;
  productImgSrc: string;
  rate: number;
}

export default function Review({
  title,
  comment,
  customerImgSrc,
  productImgSrc,
  rate,
}: ReviewProps) {
  return (
    <div className={styles.review}>
      <div className={styles.review_comment_box}>
        <div>
          <h3>{title}</h3>
          <p>{comment}</p>
          <StarRating rating={rate} />
        </div>
        <div className={styles.profile_picture_box}>
          <img src={customerImgSrc} alt="profile picture of a customer" />
        </div>
      </div>
      <div className={styles.review_product}>
        <img src={productImgSrc} alt="picture of a purchased show from kicks" />
      </div>
    </div>
  );
}
