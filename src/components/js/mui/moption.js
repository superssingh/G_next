import { Controller } from "react-hook-form";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

const MOption = ({
  control,
  name,
  label,
  options,
  error,
  width,
  defaultValue,
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
            <FormControl sx={{ minWidth: width || 180 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                {label}
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id={label}
                autoWidth
                label={label}
                value=""
                {...field}
              >
                {options.map((o, i) => {
                  return (
                    <MenuItem key={i} value={o}>
                      {o}
                    </MenuItem>
                  );
                })}
              </Select>
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

export default MOption;
