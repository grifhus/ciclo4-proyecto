import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "../components/Contact/styles.module.css"
import emailjs from "@emailjs/browser"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration:2000
    });
  }, [])
  const sendEmail = (event) => {
    event.preventDefault()
    emailjs
      .sendForm(
        "service_z75itdi",
        "template_wox02e9",
        event.target,
        "64JKz4_2uz1n9b6w6"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error))
  }

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={sendEmail} data-aos="zoom-in">
            <h1>Contacto</h1>
            <input
              type="text"
              placeholder="Nombres"
              name="user_name"
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Apellidos"
              name="user_lastname"
              required
              className={styles.input}
            />
            <input
              type="email"
              placeholder="Email"
              name="user_email"
              required
              className={styles.input}
            />
            <textarea
              type="text"
              placeholder="Mensaje"
              name="user_message"
              required
              className={styles.textarea}
            />

            <button type="submit" className={styles.green_btn}>
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
