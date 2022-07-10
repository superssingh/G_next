import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { TextField } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const service_ID = process.env.EMAIL_SERVICE_ID + "";
  const private_Key = process.env.EMAIL_PRIVATE_KEY + "";
  const template_ID = process.env.EMAIL_TEMPLATE_ID + "";
  const publicKey = "1IbTNiS-_C1i67RVo";
  const form = useRef();

  const EMAIL_SERVICE_ID = "service_qgsohfe";
  const EMAIL_PRIVATE_KEY = "kQiHiz5OXbsXFSGG3NE1D";
  const EMAIL_TEMPLATE_ID = "template_yfvxx4s";

  const sendEmail = (e) => {
    e.preventDefault();
    if (success) return;

    emailjs.init(publicKey);
    emailjs
      .sendForm(EMAIL_SERVICE_ID, EMAIL_TEMPLATE_ID, form.current, publicKey)
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          alert("Error:\n", error.text);
        }
      );
  };

  return (
    <div className="grid place-content-center ">
      <div className="contactbox grid place-content-center m-2 p-4 shadow-black/[0.30] transition-all duration-700 text-gray-500 rounded-lg shadow-lg showFromBottom">
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
            <div className="mx-2 text-center">Contact us</div>
            <form ref={form} onSubmit={sendEmail}>
              <div className=" md:flex p-2 ">
                <div className="m-2 ">
                  <TextField
                    name="from_name"
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    className="m-2"
                    fullWidth
                  />
                </div>
                <div className="m-2 ">
                  <TextField
                    name="from_email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    type="email"
                    className="m-2"
                    fullWidth
                  />
                </div>
              </div>
              <div className=" mx-4 ">
                <TextField
                  name="message"
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  rows={4}
                  fullWidth
                  className="m-2"
                />
              </div>
              <div className="grid place-content-center m-2">
                <input type="submit" value="Send" className="leafButton" />
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
