import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SocialWidget, TagName } from "../../";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { InputText, TextArea } from "../../jsx/myCustomUI";

const schema = yup.object({
  your_name: yup.string().min(3).max(24).required(),
  your_email: yup.string().email().required(),
  message: yup.string().min(10).max(200).required(),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const form = useRef();

  //Email service init------
  const EMAIL_SERVICE = {
    SERVICE_ID: "service_qgsohfe",
    TEMPLATE_ID: "template_yfvxx4s",
    PUBLIC_KEY: "1IbTNiS-_C1i67RVo",
  };

  const sendEmail = async (data) => {
    try {
      emailjs
        .sendForm(
          EMAIL_SERVICE.SERVICE_ID,
          EMAIL_SERVICE.TEMPLATE_ID,
          data,
          EMAIL_SERVICE.PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log("result success-", result);
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
        )
        .catch((e) => {
          console.log("Error ON Email-", e);
        });
    } catch (e) {
      console.log("Error ON Email-", e);
    }
  };

  const onSubmit = async (data) => {
    if (success) return;

    const name = data.your_name;
    const message = data.message;

    if (name.trim() === "") {
      alert("Your name required.");
      return;
    }

    if (message.trim() === "") {
      alert("Your message required.");
      return;
    }

    sendEmail(form.current);
  };

  return (
    <div className="grid place-content-center place-items-center">
      <div className="relative  w-fit place-content-center p-2 py-6 bg-black/50 shadow-black/[0.30] transition-all duration-700 text-gray-100 rounded-lg shadow-lg showFromBottom">
        {(success && (
          <div className="flex showFromTop">
            <div className=" text-green-400 pr-2">
              <CheckCircleIcon />
            </div>
            <div className=" font-medium text-lg ">
              Message sent successfully.
            </div>
          </div>
        )) || (
          <div>
            <div className="text-3xl mt-[-42px] mx-2 text-center">
              Contact Us
            </div>
            {/* /-----------------------------------------------------------------------------form  */}
            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
              <div className="relative w-64 md:w-full pt-4 px-2 md:pt-4  place-content-center   ">
                <div className=" relative md:flex ">
                  <div className="grid relative p-2 mb-4 ">
                    <InputText
                      name="your_name"
                      label="Name"
                      required
                      error={errors.your_name?.message}
                      register={register}
                    />
                  </div>
                  <div className="grid relative p-2 mb-4 ">
                    <InputText
                      name="your_email"
                      label="Email"
                      required
                      error={errors.your_email?.message}
                      register={register}
                    />
                  </div>
                </div>
                <div className="grid relative p-2 mb-4 ">
                  <TextArea
                    name="message"
                    label="Message"
                    required
                    error={errors.message?.message}
                    register={register}
                  />
                </div>
              </div>

              <div className="grid place-content-center mx-">
                <input
                  type="submit"
                  value="Send"
                  className=" rounded-full autoColorChange p-4 shadow-lg shadow-black/50"
                />
              </div>
            </form>
          </div>
        )}
        <div className="mt-4  p-2 ">
          {success && (
            <div className="text-center text-gray-400 text-[2rem] mb-2">
              Ohh Yeah... <br></br>🥳
            </div>
          )}
          <div className="text-center text-gray-400 text-xs mb-2">
            Follow Us
          </div>
          <div className="grid ">
            <SocialWidget social={TagName.socialLinks} />
          </div>
        </div>
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

export default ContactForm;
