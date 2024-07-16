import { navigateForbidden } from "../ultis/forbidden";

export default function Products() {
  const status = false;
  if (!status) {
    return navigateForbidden();
  }
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
}
