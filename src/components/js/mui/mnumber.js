import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const MNumber = ({
  control,
  name,
  label,
  wid,
  defaultValue,
  required,
  error,
  status,
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
              style={{ width: wid || 100 }}
              required
              error={!!error}
              helperText={error ? error?.message : ""}
              InputLabelProps={{
                style: { color: white ? "white" : "" },
              }}
              InputProps={{
                style: { color: white ? "aqua" : "" },
              }}
              {...field}
            />
          )) || (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              type="number"
              style={{ width: wid || 100 }}
              error={!!error}
              helperText={error ? error?.message : ""}
              InputLabelProps={{
                style: { color: white ? "white" : "" },
              }}
              InputProps={{
                style: { color: white ? "aqua" : "" },
              }}
              {...field}
            />
          )
        }
      />
    </>
  );
};

export default MNumber;
