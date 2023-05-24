import { CodeBlock } from "@ui";

function ConfigurationForm() {
  return <div style={{ maxWidth: "700px", margin: "0 auto"  }}>
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
        content={`id: 785773fd-1938-42f0-8a51-b4a6e282203e\ntitle: DynamicFPS\ndescription: A mod for upscaling to 1080p internally\nversion: 1.42.0\ntype: 3\ngameVersion:\n  - 1.1.0\nauthorName: ChucksFeedAndSeed\nauthorLink: https://www.reddit.com/user/ChucksFeedAndSeed/`}
      />
    </CodeBlock>
  </div>
}

export default ConfigurationForm;