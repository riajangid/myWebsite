"use client"
import * as pdfjs from 'pdfjs-dist';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
const BrochureViewer = () => {
  return (

    <section id='pdfviewer'>
        <div>
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl="/pdf/brochure.pdf" />
      </Worker>
    </div>

</section>  );
};

export default BrochureViewer;