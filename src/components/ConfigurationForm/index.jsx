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

  useEffect(function(){
    console.log(ymlFields);
  },[ymlFields]);

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

  return <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "20px", backgroundColor: "#282c34", borderRadius: "10px", display: "flex"  }}>
    <div
      style={{
        padding: "0 20px"
      }}
    >
      {generateInputs()}
    </div>
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