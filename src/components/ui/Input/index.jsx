function Input({field, handleChange}) {
  return (
    <div key={field.name}>
      <input
        onChange={handleChange}
        type="text"
        name={field.name}
        placeholder={field.name}
        style={{
          padding: "10px",
          outline: "none",
          border: "none",
          borderBottom: "3px solid #c792ea",
          borderLeft: "3px solid #c792ea",
          marginBottom: "10px",
          borderRadius: "5px",
          backgroundColor: "#c792ea11",
          color: "white"
        }}
      />
  </div>
  );
}

export default Input;