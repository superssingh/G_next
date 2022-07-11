import { Controller, useForm } from "react-hook-form";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";

const MOptionFunc = ({
  control,
  name,
  label,
  options,
  error,
  width,
  stateName,
  handleState,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue="No"
        render={({ field }) => (
          <div>
            <FormControl sx={{ minWidth: width || 180 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                {label}
              </InputLabel>
              <Select
                {...field}
                autoWidth
                label={label}
                onChange={async (event) => {
                  await handleState(name, event.target.value);
                }}
              >
                {options.map((o) => {
                  return <MenuItem value={o}>{o}</MenuItem>;
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

export default MOptionFunc;
