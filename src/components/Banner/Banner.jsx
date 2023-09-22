import banner from "../../assets/images/user.png";

const Banner = () => {
  return (
    <>
      <section className="flex flex-col lg:flex-row items-center justify-around">
        <div className="space-y-5">
          <h2 className="text-4xl">One Step Closer To Your Dream Job</h2>
          <p>
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>

        <div>
          <img src={banner} />
        </div>
      </section>
    </>
  );
};

export default Banner;
