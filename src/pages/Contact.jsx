import { createSearchParams, useNavigate } from "react-router-dom";
export default function Contact() {
  const navigate = useNavigate();
  const params = {
    pathname: "/thanh-cong",
    search: createSearchParams({
      id: 123,
      q: "ahihi",
    }).toString(),
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // navigate("/thanh-cong", { replace: true, state: { id: 123 } });
    navigate(params);
  };
  return (
    <div>
      <h1>Contact</h1>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" name="name" placeholder="Name..." />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" name="email" placeholder="Email..." />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}
