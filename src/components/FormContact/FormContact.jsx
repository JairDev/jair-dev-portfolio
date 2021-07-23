import React from "react";
import { useState } from "react";
import styles from "./FormatContact.module.css";



function FormContact({ socialIcons }) {
  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  // const spanRequired = useRef(null)

  const handleClick = (e) => {
    console.log(e.target)
    if(e.target === document.activeElement) {
      e.target.nextSibling.classList.add(styles.show)
      console.log(e.target)
    }else {
      e.target.nextSibling.classList.remove(styles.show)
    }
  } 

  const handleValues = (e, type) => {
    if(e.target.value) {
      console.log("valueee")
    }
    switch (type) {
      case "name":
        setName(e.target.value)
        // console.log(e.target.value)
        break;
      case "mail":
        setMail(e.target.value)
        // console.log(e.target.value)
        break;
      default:
        break;
    }
  }

  const handleSubmit = (e) => {
    console.log(e.target)
    if(mail.includes("@")) {
      console.log("true @")
    }
    const objMsg = {
      name,
      mail
    }
    console.log(objMsg)
    e.preventDefault()
  }

  return (
    <div className={styles.appContentFooterFormContact}>
      <div className={styles.wrapperForm}>
        <div className={styles.headerContact}>
          <h4>Trabajemos juntos</h4>
        </div>
        <form onClick={handleClick}  className={styles.formContact} onSubmit={handleSubmit}>
          <span>Nombre</span>
          <input onChange={(e) => handleValues(e, "name")} placeholder={"Eg. Jhon Doe"}></input>
          <span className={styles.required}>Requerido*</span>
          <span>Correo</span>
          <input onChange={(e) => handleValues(e, "mail")} placeholder={"Eg. correo@JhonDoe"}></input>
          <span className={styles.required}>Requerido*</span>

          <span>Mensaje</span>
          <textarea placeholder={"Nos gustaría..."} />
          <span className={styles.required}>Requerido*</span>

          <div className={styles.contentButtonForm}>
              <button className={styles.contactButton}>Enviar</button>
            {/* <form className={styles.contentButtonForm}>
            </form> */}
          </div>
        </form>
        <div className={styles.contentSocial}>
          {socialIcons.map((icon) => (
            <div key={icon.label} className={styles.socialItem}>
              <img src={icon.name} alt={icon.name} />
              <span className={styles.labelSocial}>{icon.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormContact;
