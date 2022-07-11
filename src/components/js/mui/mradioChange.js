import { Controller } from "react-hook-form";
import {
  FormControlLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel,
} from "@mui/material";

const MRadioChange = ({
  control,
  name,
  label,
  error,
  defaultValue,
  handleState,
}) => {
  return (
    <>
      <Controller
        name={name}
        rules={{ required: true }}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
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
                  onClick={async (event) => {
                    await handleState(true);
                  }}
                />
                <FormControlLabel
                  value="No"
                  control={<Radio />}
                  label="नहीं"
                  onClick={async (event) => {
                    await handleState(false);
                  }}
                />
              </RadioGroup>
            </FormControl>

            {error?.message && (
              <div className=" text-red-800 p-2 mx-2"> {error.message}</div>
            )}
          </div>
        )}
      />
    </>
  );
};

export default MRadioChange;
