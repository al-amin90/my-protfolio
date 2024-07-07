import bannerImg from "../assets/bannergithub.png";

const BannerImg = () => {
  return (
    <div className="max-w-[1480px] opacity-85 relative z-20 pt-4 font-inter  mx-auto w-[92%] mt-8 pb-40">
      <img
        src={bannerImg}
        className="w-full rounded-3xl mix-blend-multiply"
        alt=""
      />
    </div>
  );
};

export default BannerImg;
