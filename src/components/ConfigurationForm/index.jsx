import { useEffect, useState } from "react";
import { CodeBlock, Input } from "@ui";
import fields from "../../config/config_fields.json";

function ConfigurationForm() {
  const generateState = () => {
    const state = {};
    for (const field of fields) {
      state[field.name] = "";
    }
    return state;
  };

  const [ymlFields, setYmlFields] = useState(generateState());
  const [formStep, setFormStep] = useState(1);

  const generateInputs = () => {
        return fields.map((field) => {
          return <Input
                    key={field.name}
                    field={field}
                    handleChange={e => {
                        const newFieldData = {
                          ...ymlFields,
                          [field.name]: e.target.value
                        }
                          setYmlFields(newFieldData);
                     }
                    }
                  />;
        });
  };

  const generateContent = () => {
    let output = ``;
    for (const key in ymlFields) {
      output += `${key}: ${ymlFields[key]}\n`;
    }
    return output;
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setFormStep(2);
  }

  const handleBackToEdit = () => {
    setFormStep(1);
  }

  return <div style={{
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
  }}>
    <form
      onSubmit={handleFormSubmit}
      style={{
        padding: "20px",
        display: "grid",
        position: "absolute",
        width: "90%",
        overflow: "hidden",
        backgroundColor: "#282c34",
        borderRadius: "10px",
        opacity: formStep === 1 ? 1 : 0,
        pointerEvents: formStep === 1 ? "auto" : "none",
        transition: ".3s ease-in-out",
      }}
    >
      {generateInputs()}
      <button
        type="submit"
        style={{
          padding: "10px",
          margin: "10px 0",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#80cbc4",
          color: "white",
          fontFamily: 'JetBrains Mono',
          fontWeight: "bold"
        }}
      >
        Generate Yaml File
      </button>
    </form>
    <div
      style={{
        padding: "10px",
        position: "absolute",
        width: "90%",
        overflow: "hidden",
        opacity: formStep === 2 ? 1 : 0,
        pointerEvents: formStep === 2 ? "auto" : "none",
        transition: ".3s ease-in-out",
        transform: `translateX(${formStep === 2 ? "0" : "-3000px"})`
      }}
    >
      <CodeBlock
        rounded
        dark
        shadow
        theme="material"
        language="yaml"
      >
        <CodeBlock.Header>Generated Yaml</CodeBlock.Header>
        <CodeBlock.Body
          numbered
          start={1}
          copy
          content={generateContent()}
        />
      </CodeBlock>
      <button
        onClick={handleBackToEdit}
        style={{
          padding: "10px",
          margin: "10px 0",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#fd9170",
          color: "white",
          fontFamily: 'JetBrains Mono',
          fontWeight: "bold",
        }}
      >
        Edit Yaml
      </button>
    </div>

  </div>
}

export default ConfigurationForm;