import React, { useRef, useState, useEffect } from "react";
import Styles from "../styles/Modal.Module.css";

function Modal({ setForms }) {
  const [showModal, setShowModal] = useState(false);
  const Url = useRef();
  const name = useRef();
  const surname = useRef();
  const age = useRef();
  const country = useRef();
  const job = useRef();
  const gender = useRef();

  const toggleModal = () => setShowModal((prev) => !prev);

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm()) {
      const user = {
        URL: Url.current.value,
        name: name.current.value,
        surname: surname.current.value,
        age: age.current.value,
        country: country.current.value,
        job: job.current.value,
        gender: gender.current.value,
      };
      setForms((prev) => [...prev, user]);
      toggleModal();
    }
  }

  function validateForm() {
    // Regular expressions for validation
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    const nameRegex = /^[a-zA-Z]+$/;
    const ageRegex = /^\d+$/;

    // Validation errors
    const errors = {};

    // Validate URL
    if (!Url.current.value.match(urlRegex)) {
      errors.URL = "Invalid URL";
    }

    // Validate name
    if (!name.current.value.match(nameRegex)) {
      errors.name = "Invalid name";
    }

    // Validate surname
    if (!surname.current.value.match(nameRegex)) {
      errors.surname = "Invalid surname";
    }

    // Validate age
    if (!age.current.value.match(ageRegex)) {
      errors.age = "Invalid age";
    }

    // Validate country
    if (country.current.value.trim() === "") {
      errors.country = "Country is required";
    }

    // Validate job
    if (job.current.value.trim() === "") {
      errors.job = "Job is required";
    }

    // Validate gender
    if (!gender.current.value) {
      errors.gender = "Gender is required";
    }

    // Set errors if any
    setErrors(errors);
    setTimeout(() => setErrors({}), 2000);

    // Return true if no errors
    return Object.keys(errors).length === 0;
  }

  const [errors, setErrors] = useState({});

  window.addEventListener(
    "keydown",
    (e) => e.which === 27 && setShowModal(false)
  );

  return (
    <>
      <button className={Styles.btn} onClick={toggleModal}>
        Create Users
      </button>
      {showModal && (
        <div className={Styles.modal} onClick={toggleModal}>
          <form
            className={Styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <h4>Create new User</h4>
            <label>
              <span>Image URL</span>
              <input ref={Url} type="url" name="" id="" required />
              {errors.URL && <span className={Styles.error}>{errors.URL}</span>}
            </label>
            <label>
              <span>First Name</span>
              <input ref={name} type="text" required />
              {errors.name && (
                <span className={Styles.error}>{errors.name}</span>
              )}
            </label>
            <label>
              <span>Last Name</span>
              <input ref={surname} type="text" required />
              {errors.surname && (
                <span className={Styles.error}>{errors.surname}</span>
              )}
            </label>
            <label>
              <span>Age</span>
              <input ref={age} type="number" required />
              {errors.age && <span className={Styles.error}>{errors.age}</span>}
            </label>
            <label>
              <span>From</span>
              <input ref={country} type="text" required />
              {errors.country && (
                <span className={Styles.error}>{errors.country}</span>
              )}
            </label>
            <label>
              <span>Job</span>
              <input ref={job} type="text" required />
              {errors.job && <span className={Styles.error}>{errors.job}</span>}
            </label>
            <div>
              <span>Gender </span>
              <label>
                <span>Male</span>
                <input
                  name="gender"
                  type="radio"
                  value="Male"
                  ref={gender}
                  required
                />
              </label>
              <label>
                <span>Female </span>
                <input
                  name="gender"
                  type="radio"
                  value="Female"
                  ref={gender}
                  required
                />
              </label>
              {errors.gender && (
                <span className={Styles.error}>{errors.gender}</span>
              )}
            </div>
            <button type="submit" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Modal;
