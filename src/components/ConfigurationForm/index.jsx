import {useEffect, useState} from "react";
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
  }

  return <div style={{
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#282c34",
    borderRadius: "10px",
    display: "flex",
    boxShadow: "0px 3px 18px -2px rgba(0, 0, 0, 0.46)"
  }}>
    <form
      onSubmit={handleFormSubmit}
      style={{
        padding: "0 20px",
        display: "grid"
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
  </div>
}

export default ConfigurationForm;