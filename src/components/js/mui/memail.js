import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

const MEmail = ({ control, name, label, wid, required, error, white }) => {
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
              type="email"
              style={{ width: wid }}
              required
              fullWidth
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
              type="email"
              style={{ width: wid }}
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

export default MEmail;
