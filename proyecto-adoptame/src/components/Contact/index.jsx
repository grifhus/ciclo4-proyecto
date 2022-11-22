import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../components/Contact/styles.module.css";

const Contact = () => {
	const [data, setData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/contact";
			const { data: res } = await axios.post(url, data);
			navigate("/contact");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>

				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Contacto</h1>
						<input
							type="text"
							placeholder="Nombres"
							name="firstName"
							onChange={handleChange}
							value={data.firstName}
							required
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Apellidos"
							name="lastName"
							onChange={handleChange}
							value={data.lastName}
							required
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={data.email}
							required
							className={styles.input}
						/>
						<textarea 
							type="text"
							placeholder="Mensaje"
							name="mensaje"
							onChange={handleChange}
							value={data.mensaje}
							required
							className={styles.textarea}
						/>
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Registrar
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;