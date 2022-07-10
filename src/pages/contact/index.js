import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="grid place-content-center ">
      <div className="contactbox grid place-content-center m-2 p-4 shadow-black/[0.30] transition-all duration-700 text-gray-500 rounded-lg shadow-lg showFromBottom">
        <div className="mx-2 text-center">Contact us</div>
        <div className=" md:flex p-2 ">
          <div className="m-2 ">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="m-2"
              fullWidth
            />
          </div>
          <div className="m-2 ">
            <TextField
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
            id="outlined-multiline-static"
            label="Message"
            multiline
            rows={4}
            fullWidth
            className="m-2"
          />
        </div>
        <div className="grid place-content-center m-2">
          <button type="submit" className="leafButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
