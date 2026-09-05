import { useNavigate } from "react-router-dom";
import "./ProductPage.css";
import hospital from "../assets/hospital.jpeg";
import hospital2 from "../assets/hospital.png";
import school1 from "../assets/school1.jpeg"
import school from "../assets/school.png";
import kadai from "../assets/kadai.png"

export default function ProductPage() {
  const navigate = useNavigate();

  const webProducts = [
    {
      id: 1,
      name: "Kadai Website",
      description:
        "A modern and responsive website designed to showcase your business and engage your customers.",
      image: kadai,
      link: "https://www.kadai.website/",
    },
    {
      id: 2,
      name: "Hospital System",
      description:
        "A comprehensive hospital management system designed to streamline operations and improve patient care.",
      image: hospital2,
      link: "https://hospital-delta-pink.vercel.app/",
    },
    {
      id: 3,
      name: "School System",
      description:
        "A comprehensive school management system designed to streamline operations and improve education outcomes.",
      image: school,
      link: "https://www.upstagetechnologies.in/intro",
    },
  ];

  const appProducts = [
    {
      id: 1,
      name: "Kadai App",
      description:
        "A smart mobile application designed to simplify business and store management.",
      image: "picture",
      link: "/kadai",
    },
    {
      id: 2,
      name: "POS App",
      description:
        "A powerful mobile POS solution designed to make business operations easier.",
      image: "picture",
      link: "/pospage",
    },
    {
      id: 3,
      name: "Upstage school management",
      description:
        "Simplify school operations with smater digital management.",
      image: school1,
      link: "/school-management",
    },
    {
      id: 4,
      name: "Upstage Attendance and Inventory",
      description:
        "Track attendance, stock & daily business operations.",
      image: "picture",
      link: "/attendance-inventory",
    },
  ];

  return (
    <main className="products-page">
      <div className="products-container">

        {/* PAGE HEADER */}
        <div className="products-header">
          <span className="products-label">OUR PRODUCTS</span>

          <h1>Our Products & Solutions</h1>

          <p>
            Explore our digital products and solutions designed
            to meet modern business needs.
          </p>
        </div>

        <section className="product-category-card">

          <div className="category-header">

            <div className="category-number">
              01
            </div>

            <div className="category-content">
              <h2>Web Development</h2>

              <p>
                Modern, responsive websites designed to represent
                your business and engage your customers.
              </p>
            </div>

          </div>

          <div className="products-scroll">

            {webProducts.map((product) => (
              <article
                className="product-card"
                key={product.id}
              >

                <div className="product-card-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>

                <div className="product-card-content">

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <button
                    className="view-product-btn"
                    onClick={() => {window.location.href = product.link}}
                  >
                    View Product
                    <span>→</span>
                  </button>

                </div>

              </article>
            ))}

          </div>

        </section>


        <section className="product-category-card">

          <div className="category-header">

            <div className="category-number">
              02
            </div>

            <div className="category-content">
              <h2>Mobile App Development</h2>

              <p>
                Powerful and user-friendly mobile applications
                built for modern business requirements.
              </p>
            </div>

          </div>


          {/* PRODUCTS SCROLL */}

          <div className="products-scroll">

            {appProducts.map((product) => (
              <article
                className="product-card"
                key={product.id}
              >

                {/* PRODUCT IMAGE */}

                <div className="product-card-image">
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </div>


                {/* PRODUCT CONTENT */}

                <div className="product-card-content">

                  <h3>{product.name}</h3>

                  <p>{product.description}</p>

                  <button
                    className="view-product-btn"
                    onClick={() => navigate(product.link)}
                  >
                    View Product
                    <span>→</span>
                  </button>

                </div>

              </article>
            ))}

          </div>

        </section>

      </div>
    </main>
  );
}