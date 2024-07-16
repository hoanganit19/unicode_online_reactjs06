import { useLocation } from "react-router-dom";

export default function ThankYou() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Thank You</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
        repudiandae dolores modi, reprehenderit eum deserunt, rerum, voluptatem
        accusamus eos aperiam deleniti culpa minus cumque consequatur velit
        reiciendis id? Temporibus, nulla.
      </p>
    </div>
  );
}
