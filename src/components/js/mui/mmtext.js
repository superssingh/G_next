import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { borderColor } from "@mui/system";

const MMText = ({ control, name, label, wid, required, error, white }) => {
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
              multiline
              required
              rows={4}
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
              style={{ width: wid }}
              multiline
              rows={4}
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
          )
        }
      />
    </>
  );
};

export default MMText;
