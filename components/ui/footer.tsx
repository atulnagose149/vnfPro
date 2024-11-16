import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

export default function Footer() {
  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, "Name must be at least 2 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone number is required")
        .matches(
          /^[0-9]{10}$/,
          "Phone number must be exactly 10 digits and contain only numbers"
        ),
      subject: Yup.string()
        .min(3, "Subject must be at least 3 characters")
        .required("Subject is required"),
      message: Yup.string()
        .min(10, "Message must be at least 10 characters")
        .required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      emailjs
        .send(
          "service_snf0wim",
          "template_9ecgnd7",
          {
            to_name: "Vivek Nagose",
            from_name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          },
          "ZKIHOmCwnE2nTxBLY"
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message sent successfully!");
            resetForm();
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Failed to send the message. Please try again later.");
          }
        );
    },
  });

  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
          Contact Us
        </h2>
        <form onSubmit={formik.handleSubmit}>
          {/* Name Field */}
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="input mb-5"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}

          <br />

          {/* Email Field */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="input mb-5"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          ) : null}

          <br />

          <input
            type="phone"
            name="phone"
            placeholder="Phone"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className="input mb-5 p-3"
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div className="text-red-500 text-sm">{formik.errors.phone}</div>
          ) : null}

          <br />

          {/* Subject Field */}
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.subject}
            className="input mb-5"
          />
          {formik.touched.subject && formik.errors.subject ? (
            <div className="text-red-500 text-sm">{formik.errors.subject}</div>
          ) : null}

          <br />

          {/* Message Field */}
          <textarea
            name="message"
            placeholder="Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="textarea mb-5"
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-sm">{formik.errors.message}</div>
          ) : null}

          <br />

          {/* Submit Button */}
          <button type="submit">
            <span className="btn-sm relative rounded-full bg-gray-800/40 px-8 py-4 mb-10 text-xs font-normal before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_bottom,theme(colors.gray.700/.15),theme(colors.gray.700/.5))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-gray-800/60">
              <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Submit
              </span>
            </span>
          </button>
        </form>
      </div>
    </footer>
  );
}
