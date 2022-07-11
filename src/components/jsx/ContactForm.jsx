import { useFormContext } from "react-hook-form";
import MMText from "../js/mui/mmtext";
import MText from "../js/mui/mtext";
import MEmail from "../js/mui/memail";
const ContactForm = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div>
      <div className=" md:flex p-2 ">
        <div className="m-2 ">
          <MText
            name="from_name"
            control={control}
            required={true}
            error={errors.from_name}
            label="Name"
            className="m-2"
          />
        </div>
        <div className="m-2 ">
          <MEmail
            name="from_email"
            control={control}
            required={true}
            error={errors.from_email}
            label="Email"
            className="m-2"
          />
        </div>
      </div>
      <div className=" mx-4 ">
        <MMText
          name="message"
          control={control}
          required={true}
          error={errors.message}
          label="Message"
          className="m-2"
        />
      </div>
    </div>
  );
};

export default ContactForm;
