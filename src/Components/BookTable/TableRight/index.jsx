import React from "react";
import { db } from "../../../Firebase";
import { collection, addDoc } from "firebase/firestore";
import Footer from "../../../SharedComponents/Footer";
import { useFormik } from "formik";
import { reservationSchema } from "./schema";
import { number } from "yup";

const initialValues = {
  name: "",
  email: "",
  number: "",
  people: "",
  date: "",
  time: "",
  message: "",
};
const TableRight = () => {
  // const reservationCollection = new CollectionReference(db, "reservationQuery");

  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: reservationSchema,

      onSubmit: async (values, action) => {
        const { name, email, number, people, date, time, message } = values;
      
        addDoc(collection(db, "reservations"), {
          name,
          email,
          number,
          people,
          date,
          time,
          message,
        })
          .then((res) => {
            console.log("Document successfully added:", res.id);
          })
          .catch((err) => {
            console.error("Error adding document:", err);
          });

        action.resetForm();
        alert("Submitted");
        alert("Our team will contact you soon");
      },
    });

  console.log(errors);
  // console.log(initialValues);
  return (
    <div className="reservationRight">
      <div className="reservationOuter borderRadius12">
        <div className="reservationInner">
          <div className="reserveInnerHeading textCenter">
            <div className="uppercase h3 textCenter">
              <h3>reservation</h3>
            </div>
            <div className="reservePara h5 mt20 secondaryColor">
              <p>
                Secure your spot at Rooh, where exceptional sushi and a
                remarkabl?e dining experience await.
              </p>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="reservationForm ">
              <div className="borderRadius8 mt20 ">
                <input
                  className="inputForm borderRadius8"
                  name="name"
                  value={values.name}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Name"
                />
                {errors.name && touched.name ? (
                  <p className="validationError reservationError">
                    {errors.name}{" "}
                  </p>
                ) : null}
              </div>
              <div className="borderRadius8 mt20">
                <input
                  className="inputForm borderRadius8"
                  name="email"
                  value={values.email}
                  type="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your email"
                />
                {errors.email && touched.email ? (
                  <p className="validationError reservationError">
                    {errors.email}{" "}
                  </p>
                ) : null}
              </div>
              <div className="borderRadius8 mt20">
                <input
                  className="inputForm borderRadius8"
                  name="number"
                  value={values.number}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Your Number"
                />
                {errors.number && touched.number ? (
                  <p className="validationError reservationError">
                    {errors.number}{" "}
                  </p>
                ) : null}
              </div>
              <div className="reservationInput  dFlex gap12 secondaryColor">
                <div className="resevationDetails borderRadius8 mt20">
                  <input
                    className="inputForm borderRadius8"
                    name="people"
                    value={values.people}
                    type="number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Number of people 1-10"
                    max={10}
                    min={0}
                  />
                  {errors.people && touched.people ? (
                    <p className="validationError reservationError">
                      {errors.people}{" "}
                    </p>
                  ) : null}
                </div>
                <div className="resevationDetails mt20 ">
                  <input
                    id="myDate"
                    className="inputForm borderRadius8 myDate pointer dateInput"
                    name="date"
                    value={values.date}
                    type="date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="dd--mm--yy"
                  />
                  {errors.date && touched.date ? (
                    <p className="validationError reservationError">
                      {errors.date}{" "}
                    </p>
                  ) : null}
                </div>
                <div className="resevationDetails borderRadius8 mt20">
                  <input
                    className="myTime inputForm borderRadius8 pointer"
                    name="time"
                    value={values.time}
                    type="time"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="--:--"
                  />
                  {errors.time && touched.time ? (
                    <p className="validationError reservationError">
                      {errors.time}{" "}
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="borderRadius8 mt20">
                <input
                  className="inputForm borderRadius8"
                  name="message"
                  value={values.message}
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Message"
                />
              </div>
              <div className="mt20">
                <button
                  className="submit borderRadius12 uppercase font16"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="footer mt40">
        <Footer />
      </div>
    </div>
  );
};

export default TableRight;
