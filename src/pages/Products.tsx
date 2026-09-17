import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight, ChevronRight, Search, SlidersHorizontal } from 'lucide-react';
import { ALL_PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';

const normalize = (value: string) => value.toLowerCase().replace(/\s+/g, ' ').trim();

export default function Products() {
  const { category: categoryParam } = useParams();
  const [query, setQuery] = useState('');

  const selectedCategory = PRODUCT_CATEGORIES.find(c => c.slug === categoryParam);
  const categoryProducts = selectedCategory?.products ?? ALL_PRODUCTS;

  const filteredProducts = useMemo(() => {
    const q = normalize(query);
    if (!q) return categoryProducts;
    return categoryProducts.filter(product =>
      [product.name, product.dosageForm, product.composition, selectedCategory?.name ?? '']
        .some(value => normalize(value).includes(q))
    );
  }, [categoryProducts, query, selectedCategory?.name]);

  const pageTitle = selectedCategory?.name ?? 'Our Products';
  const description = selectedCategory
    ? `Browse the ${selectedCategory.name} catalogue from The Moleculez. Product information is presented by product name, dosage form and composition or strength.`
    : 'Explore the product catalogue of The Moleculez across pharmaceutical, nutraceutical, herbal and veterinary categories.';

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link><span>›</span><Link to="/products">Products</Link>
            {selectedCategory && <><span>›</span><span>{selectedCategory.name}</span></>}
          </div>
          <span className="eyebrow">PRODUCT CATALOGUE</span>
          <h1>{pageTitle}</h1>
          <p>{description}</p>
        </div>
      </section>

      <section className="section products-page">
        <div className="container">
          <div className="catalog-toolbar">
            <div>
              <span className="section-label">Browse by category</span>
              <h2>Product Portfolio</h2>
            </div>
            <label className="catalog-search">
              <Search size={18} aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={e => setQuery(e.target.value)}
                placeholder="Search product, dosage or strength..."
                aria-label="Search products"
              />
            </label>
          </div>

          <div className="category-scroller" aria-label="Product categories">
            <Link className={!selectedCategory ? 'category-chip active' : 'category-chip'} to="/products">
              <SlidersHorizontal size={15} /> All Products
            </Link>
            {PRODUCT_CATEGORIES.map(category => (
              <Link
                key={category.slug}
                className={selectedCategory?.slug === category.slug ? 'category-chip active' : 'category-chip'}
                to={`/products/${category.slug}`}
              >
                {category.name}<span>{category.products.length}</span>
              </Link>
            ))}
          </div>

          <div className="catalog-summary">
            <strong>{filteredProducts.length}</strong> {selectedCategory?.name ?? 'products'} found
            {query && <span> for “{query}”</span>}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="table-wrapper product-table-wrap">
              <div className="table-scroll product-table-scroll">
                <table className="data-table product-table">
                  <caption className="sr-only">{pageTitle} product list</caption>
                  <thead>
                    <tr>
                      <th scope="col">Product Name</th>
                      <th scope="col">Dosage Form</th>
                      <th scope="col">Composition / Strength</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map(product => (
                      <tr key={product.id}>
                        <td>{product.name}</td>
                        <td><span className="dosage-pill">{product.dosageForm}</span></td>
                        <td>{product.composition || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div className="empty-products">
              <Search size={28} />
              <h2>No products found</h2>
              <p>Try another product name, dosage form, composition or category.</p>
              <button className="btn btn-outline-dark" onClick={() => setQuery('')}>Clear Search</button>
            </div>
          )}
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <span className="eyebrow">DIRECT ENQUIRY</span>
            <h2>Looking for a specific product?</h2>
            <p>Share your specification or sourcing requirement with The Moleculez team.</p>
          </div>
          <Link to="/enquiry" className="btn btn-light">Send an Enquiry <ArrowRight size={16} /></Link>
        </div>
      </section>
    </>
  );
}
