import { useParams } from "react-router-dom";
import { services } from "../data/services";
import "./Product.css";

export default function Product() {
  const { id } = useParams();

  const service = services.find(
    (item) => item.id === Number(id)
  );

  if (!service) {
    return (
      <main className="product-page">
        <h1>Service Not Found</h1>
        <p>The requested service could not be found.</p>
      </main>
    );
  }

  return (
    <main className="product-page">
      <div className="product-page-container">

        <h1>{service.title}</h1>

        <p className="product-description">
          {service.description}
        </p>

        <section className="product-content">
          <h2>{service.title}</h2>

          <p>
            Explore our {service.title.toLowerCase()} solutions,
            products and projects developed to meet  your different
            business requirements.
          </p>

          {/* Service-specific products/details will be added here */}
        </section>

      </div>
    </main>
  );
}