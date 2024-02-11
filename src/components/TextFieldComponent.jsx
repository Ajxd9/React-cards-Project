import { Grid,TextField as MuiTextField,Alert} from "@mui/material";

const CustomTextField = ({
  id,
  label,
  required,
  fullWidth,
  autoComplete,
  type,
  autoFocus,
  value,
  onChange,
  onBlur,
  errors,
}) => {
  return (
    <Grid item xs={6}>
      <MuiTextField
        id={id}
        label={label}
        required={required}
        fullWidth
        autoComplete={autoComplete}
        type={type}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {errors && <Alert severity="error">{errors}</Alert>}
    </Grid>
  );
};
CustomTextField.defaultProps = {
  autoFocus:false,
}
export default CustomTextField;