import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { TagName } from '../../'
import { SocialWidget } from '../../tsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { InputText, TextArea } from '../../jsx/myCustomUI'

const schema = yup.object({
  your_name: yup.string().min(3).max(24).required(),
  your_email: yup.string().email().required(),
  message: yup.string().min(10).max(200).required(),
})

const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const formRef = useRef()

  //Email service init------
  const EMAIL_SERVICE = {
    SERVICE_ID: process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
    TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
    PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
  }

  const sendEmail = async (data) => {
    try {
      await emailjs
        .sendForm(
          EMAIL_SERVICE.SERVICE_ID,
          EMAIL_SERVICE.TEMPLATE_ID,
          data,
          EMAIL_SERVICE.PUBLIC_KEY
        )
        .then(
          (result) => {
            setSuccess(true)
            toast.success('📧 Message sent! 🤩', {
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
            return result
          },
          (error) => {
            return toast.warn('Error : ' + error.text, {
              position: 'bottom-left',
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
        )
    } catch (e) {
      return e
    }
  }

  const onSubmit = async (data) => {
    if (success) return

    const name = data.your_name
    const message = data.message

    if (name.trim() === '') {
      alert('Your name required.')
      return
    }

    if (message.trim() === '') {
      alert('Your message required.')
      return
    }

    const result = sendEmail(formRef.current)
  }

  return (
    <div className="grid place-content-center place-items-center">
      <div className="relative  w-fit place-content-center p-2 py-6 bg-black/50 shadow-black/[0.30] transition-all duration-700 text-gray-100 rounded-lg shadow-lg showFromBottom">
        {(success && (
          <div className="flex showFromTop">
            <div className=" text-green-400 pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
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
            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid relative w-64 md:w-full pt-4 px-2 md:pt-4  place-content-center   ">
                <div className="grid relative w-64 md:flex md:w-full ">
                  <div className=" relative p-2 mb-4 ">
                    <InputText
                      name="your_name"
                      label="Name"
                      required
                      error={errors.your_name?.message}
                      register={register}
                    />
                  </div>
                  <div className=" relative p-2 mb-4 ">
                    <InputText
                      name="your_email"
                      label="Email"
                      type="email"
                      required
                      error={errors.your_email?.message}
                      register={register}
                    />
                  </div>
                </div>
                <div className="grid place-items-center w-full  mb-4 ">
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
                  className="fancyBtn rounded-full randomBG1 p-4 hover:bg-black/50"
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
  )
}

export default ContactForm
