import { useMemo } from "react";

let products = [
  { id: 1, name: "Wireless Noise-Canceling Headphones" },
  { id: 2, name: "Ergonomic Memory Foam Desk Cushion" },
  { id: 3, name: "3-in-1 Wireless Charging Station" },
  { id: 4, name: "Stainless Steel Insulated Water Bottle" },
];

function ProductList({ products, filterText }) {
  const filtered = useMemo(
    () => products.filter((p) => p.name.includes(filterText)),
    [products, filterText],
  );

  return (
    <ul>
      {filtered.map((p) => (
        <li key={p.id}>
          ID0{p.id} : {p.name}
        </li>
      ))}
    </ul>
  );
}
export default function Topic4Lesson3() {
  return <ProductList products={products} filterText="Wireless" />;
}
