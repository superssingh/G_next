import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const MNumberShrink = ({
  control,
  name,
  label,
  wid,
  defaultValue,
  required,
  error,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || ""}
        render={({ field }) =>
          (required && (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 1000 } }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: wid || 100 }}
              required
              error={!!error}
              helperText={error ? error?.message : ""}
              {...field}
            />
          )) || (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              type="number"
              InputProps={{ inputProps: { min: 0, max: 1000 } }}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: wid || 100 }}
              error={!!error}
              helperText={error ? error?.message : ""}
              {...field}
            />
          )
        }
      />
    </>
  );
};

export default MNumberShrink;
