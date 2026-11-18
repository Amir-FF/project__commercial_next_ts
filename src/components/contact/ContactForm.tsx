'use client';

import clsx from 'clsx';
import { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './ContactSection.module.scss';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [nameInvalid, setNameInvalid] = useState(false);
  const [emailInvalid, setEmailInvalid] = useState(false);

  const checkName = (value: string) => {
    const invalid = value.trim() === '';
    setNameInvalid(invalid);
    return invalid;
  };

  const checkEmail = (value: string) => {
    const invalid = !EMAIL_PATTERN.test(value.trim());
    setEmailInvalid(invalid);
    return invalid;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nameBad = checkName(String(formData.get('name') ?? ''));
    const emailBad = checkEmail(String(formData.get('email') ?? ''));
    if (nameBad || emailBad) return;

    // TODO: send { name, email, message } to your backend / form service.
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="name"
        placeholder="Name And Family"
        aria-label="Name and family"
        autoComplete="name"
        aria-invalid={nameInvalid}
        className={clsx(styles.field, nameInvalid && styles.error)}
        onBlur={(event) => checkName(event.target.value)}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        aria-label="Email"
        autoComplete="email"
        aria-invalid={emailInvalid}
        className={clsx(styles.field, emailInvalid && styles.error)}
        onBlur={(event) => checkEmail(event.target.value)}
      />

      <textarea name="message" placeholder="Your Message" aria-label="Your message" className={clsx(styles.field, styles.textarea)} />

      <div className={styles.submitRow}>
        <button type="submit" className={styles.submit}>
          Submit
        </button>
      </div>
    </form>
  );
}
