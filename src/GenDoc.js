import "./styles.css";
import { Paragraph, Document, Packer } from "docx";
import { saveAs } from "file-saver";
//generates doc and holds basic html headers words and stuff

export default function GenDoc() {
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
  console.log(generate);

  return <button onClick={generate}> Generate doc </button>;
}
