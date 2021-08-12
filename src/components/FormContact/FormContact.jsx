import React, { useEffect, useRef } from "react";
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
  { name: githubFill, label: "Github", url: "https://github.com/JairDev" },
  {
    name: linkedinFill,
    label: "Linkedin",
    url: "https://www.linkedin.com/in/frontend-alfredo-moscoso/",
  },
  { name: twitterFill, label: "Twitter", url: "https://twitter.com/JairDevep" },
  { name: telegramFill, label: "Telegram", url: "https://t.me/jairdev" },
];

function FormContact() {
  const formRef = useRef(null)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });

  useEffect(() => {
    emailjs.init("user_DC5x2D3wdrEpBolyqO9Yr");
  });

  const onSubmit = (e) => {
    emailjs.sendForm("service_g", "my_portfolio", formRef.current).then(
      function () {
        console.log("SUCCESS!");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
    console.log(formRef.current);
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
          </div>

          <div className={styles.contentInput}>
            <span>Correo</span>
            <input
              placeholder={"Eg. correo@JhonDoe"}
              name="userEmail"
              {...register("userEmail", { required: true })}
            ></input>
            <p className={styles.required}>
              {errors.userEmail?.type === "required" && (
                <ErrorMessage
                  errors={errors}
                  name="userEmail"
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
          </div>
          <div className={styles.contentInput}>
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
          </div>

          <div className={styles.contentButtonForm}>
            <button className={styles.contactButton}>Enviar</button>
          </div>
        </form>
        <div className={styles.contentSocial}>
          {socialIcons.map((icon) => (
            <div key={icon.label} className={styles.socialItem}>
              <a href={icon.url} target="_blank" rel="noopener noreferrer">
                <Icon
                  icon={icon.name}
                  style={{ fontSize: "44px", color: "#2A2A2A" }}
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
