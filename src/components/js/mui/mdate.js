import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const MDate = ({ control, name, label, wid, required, error }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) =>
          (required && (
            <TextField
              {...field}
              id="outlined-basic"
              label={label}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
              style={{ width: wid }}
              required
              error={!!error}
              helperText={error ? error?.message : ""}                          
            />
          )) || (
            <TextField
              id="outlined-basic"
              label={label}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
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

export default MDate;
