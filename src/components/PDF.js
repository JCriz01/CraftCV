import {PDFDocument, StandardFonts} from "pdf-lib";
import path from "path";
import fs from "fs";

export async function PDF() {
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

function deletePDF(pdfDoc){
  pdfDoc.removePage(0);

}

export async function fullName(pdfDoc, setPDFSource, personObj){

  //const pdfDoc = await PDFDocument.load(pdfSource);

  const firstPage = pdfDoc.getPages()[0];

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const name = personObj.firstName + " "+ personObj.lastName;
  const textWidth = font.widthOfTextAtSize(name, 22);

  const centerX = (firstPage.getWidth() - textWidth) / 2;
  const centerY = firstPage.getHeight() - 65;

  firstPage.drawText(name, {
    x: centerX,
    y: centerY,
    font,
    size: 22,
  });



  //const pdfBytes = await pdfDoc.save();
  //const newPDFSource = await pdfDoc.saveAsBase64({dataUri: true});
  //setPDFSource(newPDFSource);

}

async function addLinks(pdfDoc, setPDFSource, personObj){

  const firstPage = pdfDoc.getPages()[0];

  const font = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontSize = 12;

  const textWidth = font.widthOfTextAtSize(personObj.firstName + " "+ personObj.lastName, 22);

  const words = [personObj.email, personObj.github];

  const totalWidth= words.reduce((acc, word)=> acc + font.widthOfTextAtSize(word, fontSize),0);

  const startX = (firstPage.getWidth() - totalWidth);

  const spaceBetweenWords = (firstPage.getWidth() - 2 * 50 - totalWidth) / (words.length - 1);

  let currentX = startX;

  for(const word of words){
    firstPage.drawText( word, {
      x: currentX,
      y: firstPage.getHeight() - 70,
      font,
      size: fontSize,

    })
    currentX += font.widthOfTextAtSize(word, fontSize) + spaceBetweenWords;
  }
}

export async function modifyPDF(pdfSource, setPDFSource, formObj){

  const pdfDoc = await PDFDocument.load(pdfSource);

  if(pdfDoc.getPages().length > 0){
    deletePDF(pdfDoc);
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

    pdfDoc.addPage([612, 792]);
  }

  await fullName(pdfDoc, setPDFSource, formObj.person);
  await addLinks(pdfDoc, setPDFSource, formObj.person);

  const pdfBytes = await pdfDoc.save();
  const newPDFSource = await pdfDoc.saveAsBase64({dataUri: true});
  setPDFSource(newPDFSource);

}