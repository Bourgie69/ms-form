const FormInput = (props) => {
  const {
    label,
    name,
    type,
    accept,
    value,
    error,
    errorMessage,
    onChange,
    onKeyDown,
    style,
    placeholder,
  } = props;

  return (
    <>
      <p>
        {label}
        <span style={{ color: "red" }}> * </span>
        {error && <span style={{ color: "red" }}> {errorMessage}</span>}
      </p>

      <input
        type={type}
        accept={accept}
        placeholder={label || placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
      />
    </>
  );
};

export default FormInput;
