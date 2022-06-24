import { TextField } from "@mui/material";

const Contact = () => {
  return (
    <div className="grid place-content-center">
      <div className="grid place-content-center m-2 p-4  transition-all duration-700 bg-white  text-gray-500 rounded-lg border-2 border-solid shadow-lg ">
        <div>Contact Us</div>
        <div className="flex p-2 ">
          <div className="m-2 ">
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              className="m-4"
            />
          </div>
          <div className="m-2 ">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              className="m-4"
            />
          </div>
        </div>
        <div className=" m-2 ">
          <div className="m-2">
            <TextField
              id="outlined-multiline-static"
              label="Multiline"
              multiline
              rows={4}
              fullWidth
              className="mx-4"
            />
          </div>
        </div>
        <div className="grid place-content-center">
          <button type="submit" className="leafButton">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
