import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const MText = ({ control, name, label, wid, required, error }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) =>
          (required && (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              style={{ width: wid }}
              required
              fullWidth
              error={!!error}
              helperText={error ? error?.message : ""}
              {...field}
            />
          )) || (
            <TextField
              id="outlined-basic"
              label={label}
              variant="outlined"
              style={{ width: wid }}
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

export default MText;
