import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export async function fetchAndExtractPdfText(fileUrl: string) {
  const response = await fetch(fileUrl); //downloads a pdf file form a url
  const blob = await response.blob(); //blob = package of raw data. The pdf is temporarily stored as a blob

  const arrayBuffer = await blob.arrayBuffer(); //converts the blob into a format that our pdf reader can understand

  const loader = new PDFLoader(new Blob([arrayBuffer]));
  const docs = await loader.load(); //reads all the pages and the text from the PDF

  //combine all pages into one big text string
  return docs.map((doc) => doc.pageContent).join("\n");
}
