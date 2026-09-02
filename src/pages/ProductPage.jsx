import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import "./ProductPage.css";

export default function ProductPage() {
  const navigate = useNavigate();

  return (
    <main className="products-page">
      <div className="products-container">

        {/* HEADER */}
        <div className="products-header">
          <span className="products-label">OUR PRODUCTS</span>

          <h1>Our Products & Solutions</h1>

          <p>
            Explore our complete range of digital solutions and
            services developed to meet different business needs.
          </p>
        </div>


        {/* ALL SERVICES DETAILS */}
        <div className="products-list">

          {services.map((service, index) => (
            <section
              className="product-section"
              key={service.id}
              onClick={() => 
              {
                if (service.type === "external") {
                  window.location.href = service.link;
                } else {
                  navigate(service.link);
                }
              }}
            >

              {/* NUMBER */}
              <div className="product-number">
                {String(index + 1).padStart(2, "0")}
              </div>


              {/* DETAILS */}
              <div className="product-details">

                <h2>{service.title}</h2>

                <p className="product-description">
                  {service.description}
                </p>


                {/* ABOUT */}
                <div className="product-info">
                  <h3>
                    About {service.title}
                  </h3>

                  <p>
                    Our {service.title.toLowerCase()} solutions are
                    designed to help businesses build, improve and
                    manage their digital presence with modern,
                    reliable and scalable technology.
                  </p>
                </div>


                {/* HIGHLIGHTS */}
                <div className="product-highlights">

                  <div className="product-highlight">
                    <h4>Professional Solutions</h4>

                    <p>
                      Digital solutions designed according to
                      your business requirements.
                    </p>
                  </div>


                  <div className="product-highlight">
                    <h4>Modern Technology</h4>

                    <p>
                      Built using modern technologies and
                      development practices.
                    </p>
                  </div>


                  <div className="product-highlight">
                    <h4>Business Focused</h4>

                    <p>
                      Solutions focused on performance,
                      usability and customer satisfaction.
                    </p>
                  </div>

                </div>

              </div>

            </section>
          ))}

        </div>

      </div>
    </main>
  );
}