import { Header } from "@ui";
import ConfigurationForm  from "@components/ConfigurationForm";
function Landing() {
  return <div className="Landing">
    <Header
      text="Modmopet"
      subtext="Finally a modmanager for emulation."
    />
    <ConfigurationForm />
  </div>
}
export default Landing;