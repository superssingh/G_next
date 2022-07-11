import { Controller } from "react-hook-form";
import {
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const MRadio = ({
  control,
  name,
  label,
  options,
  error,
  defaultValue,
  YesNo,
}) => {
  return (
    <>
      <Controller
        name={name}
        rules={{ required: true }}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) =>
          (YesNo && (
            <div>
              <FormControl>
                <FormLabel id="demo-row-radio-buttons-group-label">
                  {label}
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name="row-radio-buttons-group"
                  value={""}
                  {...field}
                >
                  <FormControlLabel
                    value="Yes"
                    control={<Radio />}
                    label="हाँ"
                  />
                  <FormControlLabel
                    value="No"
                    control={<Radio />}
                    label="नहीं"
                  />
                </RadioGroup>
              </FormControl>

              {error?.message && (
                <div className=" text-red-800 p-2 mx-2"> {error.message}</div>
              )}
            </div>
          )) || (
            <div>
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
                  {options.map((o, i) => {
                    return (
                      <FormControlLabel
                        value={o}
                        key={i}
                        control={<Radio />}
                        label={o}
                      />
                    );
                  })}
                </RadioGroup>
              </FormControl>

              {error?.message && (
                <div className=" text-red-800 p-2 mx-2"> {error.message}</div>
              )}
            </div>
          )
        }
      />
    </>
  );
};

export default MRadio;
