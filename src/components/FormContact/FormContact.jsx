import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./FormatContact.module.css";
import { Icon } from "@iconify/react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

import githubFill from "@iconify/icons-akar-icons/github-fill";
import linkedinFill from "@iconify/icons-akar-icons/linkedin-fill";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";
import telegramFill from "@iconify/icons-akar-icons/telegram-fill";

const socialIcons = [
  { name: githubFill, label: "Github" },
  { name: linkedinFill, label: "Linkedin" },
  { name: twitterFill, label: "Twitter" },
  { name: telegramFill, label: "Telegram" },
];

function FormContact() {
  // const { register, handleSubmit } = useForm();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  // const spanRequired = useRef(null)

  useEffect(() => {
    emailjs.init("user_DC5x2D3wdrEpBolyqO9Yr");
  });

  const handleClick = (e) => {
    // console.log(e.target);
    // if (e.target === document.activeElement) {
    //   e.target.nextSibling.classList.add(styles.show);
    //   console.log(e.target);
    // } else {
    //   e.target.nextSibling.classList.remove(styles.show);
    // }
  };

  const handleValues = (e, type) => {
    console.log(e);
    if (e.target.value) {
      console.log("valueee");
    }
    switch (type) {
      case "name":
        setName(e.target.value);
        break;
      case "mail":
        setMail(e.target.value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (e) => {
    console.log(e);
    if (mail.includes("@")) {
      console.log("true @");
    }
    const objMsg = {
      name,
      mail,
    };
    console.log(objMsg);

    // e.addEventListener("submit", function (event) {
    //   event.preventDefault();
    //   // generate a five digit number for the contact_number variable
    //   this.contact_number.value = (Math.random() * 100000) | 0;
    //   // these IDs from the previous steps
    //   emailjs.sendForm("contact_service", "contact_form", this).then(
    //     function () {
    //       console.log("SUCCESS!");
    //     },
    //     function (error) {
    //       console.log("FAILED...", error);
    //     }
    //   );
    // });
    e.preventDefault();
    // emailjs.sendForm("service_g", "my_portfolio", e.target).then(
    //   function () {
    //     console.log("SUCCESS!");
    //   },
    //   function (error) {
    //     console.log("FAILED...", error);
    //   }
    // );
    // console.log(e.target);
  };

  return (
    <div className={styles.appContentFooterFormContact}>
      <div className={styles.wrapperForm}>
        <div className={styles.headerContact}>
          <h4>Trabajemos juntos</h4>
        </div>
        <form
          id="contact-form"
          onClick={handleClick}
          className={styles.formContact}
          onSubmit={handleSubmit(onSubmit)}
        >
          <span>Nombre</span>
          <input
            onChange={(e) => handleValues(e, "name")}
            placeholder={"Eg. Jhon Doe"}
            name="from_name"
            {...register("fromName", { required: true })}
          ></input>
          <p className={styles.required}>
            {errors.fromName?.type === "required" && (
              <ErrorMessage
                errors={errors}
                name="fromName"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{"Este campo es requerido *"}</p>
                      ))
                    : null;
                }}
              />
            )}
          </p>
          <span>Correo</span>
          <input
            onChange={(e) => handleValues(e, "mail")}
            placeholder={"Eg. correo@JhonDoe"}
            name="user_email"
            {...register("user_email")}
          ></input>
          <p className={styles.required}>
            {errors.fromName?.type === "required" && (
              <ErrorMessage
                errors={errors}
                name="user_email"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{"Este campo es requerido"}</p>
                      ))
                    : null;
                }}
              />
            )}
          </p>

          <span>Mensaje</span>
          <textarea
            placeholder={"Nos gustaría..."}
            name="message"
            {...register("message")}
          />
          <p className={styles.required}>
            {errors.fromName?.type === "required" && (
              <ErrorMessage
                errors={errors}
                name="message"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{"Este campo es requerido"}</p>
                      ))
                    : null;
                }}
              />
            )}
          </p>

          <div className={styles.contentButtonForm}>
            <button className={styles.contactButton}>Enviar</button>
          </div>
        </form>
        <div className={styles.contentSocial}>
          {socialIcons.map((icon) => (
            <div key={icon.label} className={styles.socialItem}>
              <Icon
                icon={icon.name}
                style={{ fontSize: "44px", color: "#2A2A2A" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormContact;
