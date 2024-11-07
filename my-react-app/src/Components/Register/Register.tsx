import { FunctionComponent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.scss";

export const Register: FunctionComponent = () => {
    const navigate = useNavigate();

    const [userObject, setUserObject] = useState({
        name: "",
        email: "",
        password: "",
        gender: "",
        country: ""
    });

    const [userList, setUserList] = useState<any[]>([]);

    // Učitaj korisnike sa localStorage kada se komponenta učita
    useEffect(() => {
        const savedUsers = localStorage.getItem("userList");
        if (savedUsers) {
            setUserList(JSON.parse(savedUsers)); // Učitavanje korisnika iz localStorage
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUserObject(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updatedUserList = [...userList, { ...userObject }];
        setUserList(updatedUserList);

        // Spremi novi niz korisnika u localStorage
        localStorage.setItem("userList", JSON.stringify(updatedUserList));

        // Resetovanje forme nakon submit-a
        setUserObject({
            name: "",
            email: "",
            password: "",
            gender: "",
            country: ""
        });

        navigate("/Login");

        console.log(updatedUserList); // Ispisuje celu listu korisnika
    };

    return (
        <div className="registration-page">
            <h1>Registracija</h1>
            <form className="registration-form" onSubmit={handleSubmit}>

                <label htmlFor="name">
                    Name:
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={userObject.name}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={userObject.email}
                        onChange={handleChange}
                    />
                </label>

                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={userObject.password}
                        onChange={handleChange}
                    />
                </label>

                <div className="gender-group">
                    <label htmlFor="male">
                        <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="Male"
                            checked={userObject.gender === "Male"}
                            onChange={handleChange}
                        />
                        Male
                    </label>

                    <label htmlFor="female">
                        <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="Female"
                            checked={userObject.gender === "Female"}
                            onChange={handleChange}
                        />
                        Female
                    </label>

                    <label htmlFor="other">
                        <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="Other"
                            checked={userObject.gender === "Other"}
                            onChange={handleChange}
                        />
                        Other
                    </label>
                </div>

                <label htmlFor="country">
                    Country:
                    <select
                        id="country"
                        name="country"
                        value={userObject.country}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select your country</option>
                        <option value="US">United States</option>
                        <option value="BiH">Bosnia and Herzegovina</option>
                    </select>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};