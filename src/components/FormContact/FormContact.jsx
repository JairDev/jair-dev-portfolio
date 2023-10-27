import React, { useEffect, useRef, useState } from "react";

import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import emailjs from "@emailjs/browser";

import { Icon } from "@iconify/react";
import githubFill from "@iconify/icons-akar-icons/github-fill";
import linkedinFill from "@iconify/icons-akar-icons/linkedin-fill";
import twitterFill from "@iconify/icons-akar-icons/twitter-fill";
import telegramFill from "@iconify/icons-akar-icons/telegram-fill";

import styles from "./FormatContact.module.css";
import Button from "components/Button/Button";

const socialIcons = [
  { name: githubFill, label: "Github", url: "https://github.com/JairDev" },
  {
    name: linkedinFill,
    label: "Linkedin",
    url: "https://www.linkedin.com/in/alfredo-moscoso-desarrollador-frontend/",
  },
  { name: twitterFill, label: "Twitter", url: "https://twitter.com/JairDevep" },
  { name: telegramFill, label: "Telegram", url: "https://t.me/jairdev" },
];

function FormContact() {
  let send = false;
  const formRef = useRef(null);
  const spanStatusRef = useRef(null);
  const [buttonState, setButtonState] = useState("Enviando...");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  useEffect(() => {
    emailjs.init("QQDER6PZw0GDyGhYI");
  });

  const onSubmit = (e) => {
    // console.log(e);
    setButtonState("Enviando...");
    send = !send;
    if (send) {
      spanStatusRef.current.classList.add(styles.send);
    }
    emailjs.sendForm("service_g", "my_portfolio", formRef.current).then(
      function () {
        setButtonState("¡ Mensaje enviado !");
        send = !send;
        setTimeout(() => {
          spanStatusRef.current.classList.remove(styles.send);
        }, 500);
      },
      function (error) {
        setButtonState("¡ Mensaje no enviado !");
        setTimeout(() => {
          spanStatusRef.current.classList.remove(styles.send);
        }, 500);
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div className={styles.appContentFooterFormContact}>
      <div className={styles.wrapperForm}>
        <div className={styles.headerContact}>
          <h4>Trabajemos juntos</h4>
        </div>
        <form
          ref={formRef}
          id="contact-form"
          className={styles.formContact}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={styles.contentInput}>
            <span>Nombre</span>
            <input
              placeholder={"Eg. Jhon Doe"}
              name="fromName"
              {...register("fromName", { required: true })}
            ></input>
            <p className={styles.required}>
              {errors.fromName?.type === "required" && (
                <ErrorMessage
                  errors={errors}
                  name="fromName"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <span key={type}>{"Este campo es requerido *"}</span>
                        ))
                      : null;
                  }}
                />
              )}
            </p>
          </div>

          <div className={styles.contentInput}>
            <span>Correo</span>
            <input
              // type="email"
              placeholder={"Eg. correo@JhonDoe"}
              name="userEmail"
              {...register("userEmail", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Ingresa un correo electrónico válido",
                },
              })}
            ></input>
            <p className={styles.required}>
              {errors.userEmail?.type === "pattern" && (
                <ErrorMessage
                  errors={errors}
                  name="userEmail"
                  render={({ messages }) => {
                    console.log("messages", errors);
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <span key={type}>{errors.userEmail.message}</span>
                        ))
                      : null;
                  }}
                />
              )}
              {errors.userEmail?.type === "required" && (
                <ErrorMessage
                  errors={errors}
                  name="userEmail"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <span key={type}>{"Este campo es requerido *"}</span>
                        ))
                      : null;
                  }}
                />
              )}
            </p>
          </div>
          <div className={styles.contentInput}>
            <span>Mensaje</span>
            <textarea
              placeholder={"Nos gustaría..."}
              name="message"
              {...register("message", {
                required: true,
              })}
            />
            <p className={styles.required}>
              {errors.message?.type === "required" && (
                <ErrorMessage
                  errors={errors}
                  name="message"
                  render={({ messages }) => {
                    return messages
                      ? Object.entries(messages).map(([type, message]) => (
                          <span key={type}>{"Este campo es requerido"}</span>
                        ))
                      : null;
                  }}
                />
              )}
            </p>
          </div>
          <div className={styles.wrapperButtonForm}>
            <span ref={spanStatusRef} className={styles.statusMailSend}>
              {buttonState}
            </span>
            <div className={styles.contentButtonForm}>
              <Button classButton="contactButton">Enviar</Button>
            </div>
          </div>
        </form>
        <div className={styles.contentSocial}>
          {socialIcons.map((icon) => (
            <div key={icon.label} className={styles.socialItem}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <Icon
                  icon={icon.name}
                  style={{ fontSize: "32px", color: "#2A2A2A" }}
                />
                <span className={styles.labelSocial}>{icon.label}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormContact;
