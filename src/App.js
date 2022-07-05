import "./styles.css";
import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
import Create from "./Create";
//generates doc and holds basic html headers words and stuff

export default function App() {
  const generate = () => {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              text: "Bullet points",
              bullet: {
                level: 0 //How deep you want the bullet to be
              }
            }),
            new Paragraph({
              text: "Are awesome",
              bullet: {
                level: 0
              }
            })
          ]
        }
      ]
    });

    Packer.toBlob(doc).then((blob) => {
      console.log(blob);
      saveAs(blob, "example.docx");
      console.log("Document created successfully");
    });
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Edit to see some magic happen!</h2>
      <button onClick={generate}>Generate doc</button>
      <Create />
    </div>
  );
}
