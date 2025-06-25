import PdfViewer from "@/components/pdf-section"; // Import your PdfViewer component
import { useEffect } from "react";
const Brochure = () => {
    useEffect(() => {
    // Disable right-click
    const handleRightClick = (e:any) => e.preventDefault();

    document.addEventListener("contextmenu", handleRightClick);

    return () => {
      document.removeEventListener("contextmenu", handleRightClick);
    };
  }, []);
  return (
    <>
     <div id='pdfviewerPage'>
        <PdfViewer />
      </div>
    </>
  );
};

export default Brochure;
