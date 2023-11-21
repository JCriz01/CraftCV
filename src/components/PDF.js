import { jsPDF } from "jspdf";

const doc = new jsPDF({
  orientation: "portrait",
  unit: "in",
  format: [8.5, 11],
});

doc.text("Hello world, testing!", 1, 1);

export function testing() {
  doc.text("Hello world, testing!", 1, 1);
  doc.save("pdfTesting.pdf");
  console.log(doc);
}

export function outputPDF() {
  return doc.output("datauristring");
}

export function addName(nameString) {
  doc.text(
    nameString,
    doc.internal.pageSize.getWidth() / 2,
    10,
    null,
    null,
    "center"
  );
}
