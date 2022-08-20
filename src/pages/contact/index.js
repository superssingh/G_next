import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ContactForm from "../../components/jsx/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup.object({
  from_name: yup.string().min(3).max(24).required(),
  from_email: yup.string().email().required(),
  message: yup.string().min(25).max(200).required(),
});

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const EMAIL_SERVICE_ID = "service_qgsohfe";
  const EMAIL_TEMPLATE_ID = "template_yfvxx4s";
  const publicKey = "1IbTNiS-_C1i67RVo";
  const form = useRef();
  const methods = useForm({ resolver: yupResolver(schema) });

  const sendEmail = () => {
    if (success) return;

    if (form.current.from_name.value.trim() == "") {
      alert("Your name required.");
      return;
    }

    if (form.current.message.value.trim() == "") {
      alert("Your message required.");
      return;
    }

    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, publicKey)
      .then(
        (result) => {
          setSuccess(true);
          toast.success("📧 Message sent! 🤩", {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          toast.warn("Error : " + error.text, {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center m-2 p-4 bg-white bg-opacity-30 shadow-black/[0.30] transition-all duration-700 text-gray-100 rounded-lg shadow-lg showFromBottom">
        {(success && (
          <div className="flex showFromTop">
            <div className=" text-green-600 pr-2">
              <CheckCircleIcon />
            </div>
            <div className=" font-medium text-lg ">
              Message sent successfully.
            </div>
          </div>
        )) || (
          <div>
            <div className="contactLabel mx-2 text-center">Contact Us</div>
            <FormProvider {...methods}>
              <form
                ref={form}
                onSubmit={methods.handleSubmit(sendEmail)}
                error={methods.error || null}
              >
                <ContactForm />
                <div className="grid place-content-center m-2">
                  <input
                    type="submit"
                    value="Send"
                    className=" rounded-md autoColorChange p-4 shadow-lg shadow-black/50"
                  />
                </div>
              </form>
            </FormProvider>
          </div>
        )}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
