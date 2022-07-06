import "./styles.css";
import Create from "./Create";
import GenDoc from "./genDoc";
//brings everything together

export default function App() {
  return (
    <div className="App">
      <h1>hello</h1>
      <h2>Edit to see some magic happen!</h2>
      <Create />
      <GenDoc />
    </div>
  );
}
