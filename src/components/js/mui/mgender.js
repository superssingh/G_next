import { Controller } from "react-hook-form";
import {
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const MGender = ({ control, name, label, error }) => {
  return (
    <>
      <Controller
        name={name}
        rules={{ required: true }}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              {label}
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={""}
              {...field}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </FormControl>
        )}
      />
      {error?.message && (
        <div className=" text-red-800 p-2 mx-2"> {error?.message}</div>
      )}
    </>
  );
};

export default MGender;
