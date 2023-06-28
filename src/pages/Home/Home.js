import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="hero-container container">
        <div className="hero-content">
          <h1>
            Empowering <span>Voices</span>, Uniting <span>Students</span>!
          </h1>
          <p>
            "Championing Student Rights, Embracing Freedom - Free Student Union:
            Uniting for a Better Tomorrow."
          </p>
          <button>
            <a href="#about">Explore More</a>
          </button>
        </div>
        <div className="hero-image">
          <img
            src="/images/gallery/hero-img.svg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>

      <div className="container card-container">
        <div className="row g-3 ">
          <div className="col-12 col-md-5 col-lg-4">
            <div className="card ">
              <div className="card-body">
                <h3 className="card-title text-center">Advocacy</h3>
                <p className="card-text">
                  Actively advocates for the rights and interests of students.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <div className="card ">
              <div className="card-body">
                <h3 className="card-title text-center">Inclusivity</h3>
                <p className="card-text">
                  Inclusively welcomes students from all backgrounds.
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4">
            <div className="card ">
              <div className="card-body">
                <h3 className="card-title text-center">Transparency</h3>
                <p className="card-text">
                  Transparency and accountability in decision-making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-container" id="about">
        <div className="about-content">
          <h2>About-Us</h2>
          <p>
            The Free Student Union in Nepal is a student-led organization that
            represents and advocates for the rights and interests of students
            across the country. It plays a crucial role in promoting student
            welfare, addressing educational issues, and fostering a vibrant
            academic environment. The Free Student Union in Nepal strives to
            ensure inclusivity, academic freedom, and student empowerment
            through its advocacy efforts, community engagement, and provision of
            support services. It aims to create a platform where students can
            voice their concerns, participate in decision-making processes, and
            contribute to the overall improvement of the education system in
            Nepal.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/members/group.jpg " className="img-fluid" alt="" />
        </div>
      </div>
      <hr />

      <div className="about-campus-container">
        <div className="about-campus-content">
          <h2>Purwanchal Campus</h2>
          <p>
            Purwanchal Campus in Dharan, Nepal, is a respected educational
            institution affiliated with Tribhuvan University. Established in
            1978, it offers undergraduate and postgraduate programs in science,
            management, humanities, and education. With a focus on practical
            education and research, the campus provides well-equipped facilities
            and encourages student participation in extracurricular activities.
            It has a reputation for academic excellence, dedicated faculty, and
            producing successful graduates who contribute to society.
          </p>
        </div>
        <div className="about-campus-image">
          <img
            src="/images/gallery/campus-image.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
