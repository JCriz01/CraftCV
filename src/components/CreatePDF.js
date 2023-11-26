import {PDFDocument, StandardFonts} from "pdf-lib";
import path from "path";
import fs from "fs";

export async function CreatePDF() {
  const pdfDoc = await PDFDocument.create();

  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage([612, 792]);

  const pdfBytes = await pdfDoc.save();

  return await pdfDoc.saveAsBase64({dataUri: true});
}

export async function LoadPDF(pdfSource){


  const pdfDoc = await PDFDocument.load(pdfSource);

  //TODO: work on this later
}

export async function fullName(pdfDoc, setPDFSource, personObj){

  //const pdfDoc = await PDFDocument.load(pdfSource);

  const firstPage = pdfDoc.getPages()[0];

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const textWidth = font.widthOfTextAtSize(personObj.firstName + " "+ personObj.lastName, 22);

  const centerX = (firstPage.getWidth() - textWidth) / 2;
  const centerY = firstPage.getHeight() - 65;

  firstPage.drawText(personObj.firstName + " "+ personObj.lastName, {
    x: centerX,
    y: centerY,
    font,
    size: 22,
  });

  firstPage.drawLine({
    start: { x: 50, y:centerY-1 },
    end: { x: 562, y: centerY-1 },
  })

  //const pdfBytes = await pdfDoc.save();

  //const newPDFSource = await pdfDoc.saveAsBase64({dataUri: true});
  //setPDFSource(newPDFSource);
}

async function addlinks(pdfDoc, setPDFSource, personObj){

  const firstPage = pdfDoc.getPages()[0];

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const textWidth = font.widthOfTextAtSize(personObj.firstName + " "+ personObj.lastName, 22);

  const totalWidth =



}

export async function modifyPDF(pdfSource, setPDFSource, formObj){
  const pdfDoc = await PDFDocument.load(pdfSource);

  await fullName(pdfDoc, setPDFSource, formObj.person);

  const pdfBytes = await pdfDoc.save();
  const newPDFSource = await pdfDoc.saveAsBase64({dataUri: true});
  setPDFSource(newPDFSource);
}