import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const LandingPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      navigate("/searchpage");
    }, 5000)
  }, [])

  return (
    <div className="landing-page d-flex justify-content-center align-items-center">
      <div className="text-center">
        {loading && <Spinner />}
        <h1 className="display-4">¡Bienvenido a nuestra Librería!</h1>
        <p className="lead">Te redirigiremos a la página principal en 5 segundos...</p>
      </div>
    </div>
  )
}

export default LandingPage