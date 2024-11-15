export default function StarRating({ rating }: { rating: number }) {
  const STAR_MAX_COUNT = 5;
  return (
    <div>
      {[...Array(STAR_MAX_COUNT)].map((_, index) => (
        <span key={index}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              marginRight: "5px",
            }}
          >
            <path
              d="M7.62014 4.16675L6.64014 0.940088C6.4468 0.306755 5.55347 0.306755 5.3668 0.940088L4.38014 4.16675H1.41347C0.766802 4.16675 0.500135 5.00009 1.0268 5.37342L3.45347 7.10675L2.50014 10.1801C2.3068 10.8001 3.0268 11.3001 3.54014 10.9068L6.00013 9.04009L8.46013 10.9134C8.97347 11.3068 9.69347 10.8068 9.50013 10.1868L8.5468 7.11342L10.9735 5.38009C11.5001 5.00009 11.2335 4.17342 10.5868 4.17342H7.62014V4.16675Z"
              fill={index < rating ? "#FFA52F" : "#D9D9D9"}
            />
          </svg>
        </span>
      ))}
    </div>
  );
}
