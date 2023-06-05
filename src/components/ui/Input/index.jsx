function Input({field, handleChange}) {
  const generateInput = () => {
    switch (field.type) {
      case "text":
        return (<input
          required={field.required}
          onChange={handleChange}
          type={field.type}
          name={field.name}
          id={field.name}
          placeholder={field.placeholder}
          style={{
            width: "100%",
            padding: "10px",
            outline: "none",
            border: "3px solid #c792ea",
            borderTop: "0px",
            borderRadius: "0 0 5px 5px",
            backgroundColor: "transparent",
            color: "white",
            fontFamily: 'JetBrains Mono'
          }}
      />);
      case "textarea":
        return (<textarea
                  required={field.required}
                  name={field.name}
                  onChange={handleChange}
                  cols="30"
                  rows="4"
                  placeholder={field.placeholder}
                  style={{
                    margin: "0",
                    padding: "10px",
                    outline: "none",
                    border: "3px solid #c792ea",
                    borderRadius: "0px 0px 5px 5px",
                    backgroundColor: "transparent",
                    color: "white",
                    fontFamily: 'JetBrains Mono',
                    resize: "none"
                  }}
                ></textarea>);
      case "dropdown":
        return (
          <select
            required={field.required}
            name={field.name}
            onChange={handleChange}
            style={{
              padding: "10px",
              width: "100%",
              outline: "none",
              border: "3px solid #c792ea",
              borderRadius: "0px 0px 5px 5px",
              backgroundColor: "transparent",
              color: "white",
              fontFamily: 'JetBrains Mono',
              resize: "none"
            }}
            >
            <option value="" disabled selected>{field.placeholder}</option>
            {field.options.map(option => <option key={option.value} value={option.value}>{option.title}</option>)}
          </select>
        );
      default:
        return null
    }
  }


  return (
    <div
      className={`input-${field.name}`}
      style={{
        marginBottom: "10px"
      }}
    >
      <label
        htmlFor={field.name}
      >{field.label}</label>
      {generateInput()}
    </div>
  );
}

export default Input;