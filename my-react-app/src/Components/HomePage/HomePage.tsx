import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.scss";

export const HomePage: FunctionComponent = () => {
    const navigate = useNavigate();
    const handleRoute = (path: string) => {
        navigate(path);
    }
    return(
        <div className="home-page">
            <h1>Dobrodošli na Home Page aplikacije.</h1>

            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
               Eos nobis dicta repellat accusantium consequuntur vero corrupti
               ipsam adipisci voluptates fugit!
            </p>

            <button onClick={() => handleRoute("./Register")}>Registriraj se</button>
        </div>
    );
}