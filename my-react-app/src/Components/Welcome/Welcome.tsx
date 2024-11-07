import { FunctionComponent } from "react";
import "./Welcome.scss";

export const Welcome: FunctionComponent = () => {
  return (
    <div className="welcome-page">
      <div className="welcome-container">
        <h1>Dobrodošli na početnu stranu aplikacije</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint ea libero, reiciendis quae ullam reprehenderit iusto rerum nulla saepe commodi.
        </p>
      </div>
    </div>
  );
};