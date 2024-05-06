import { Link } from "react-router-dom";
import Button from "../components/button";

const Error = () => {
  return (
    <div className="bg-slate-800 fixed inset-0 grid">
      <div className="m-auto">
        <h1 className="text-8xl font-bold text-slate-100 mb-4">Oops...!</h1>
        <p className="text-slate-100 text-lg text-center mb-2">Something went wrong 🫥</p>
        <Link to={'/'} className="text-neutral-400 mt-3 block text-center">
          <Button variant="primary">Go Home</Button>
        </Link>
      </div>
    </div>
  );
}

export default Error;
