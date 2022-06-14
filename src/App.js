import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/pdfjs-express';
import './App.css';

const App = () => {
  const viewer = useRef(null);
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        licenseKey: "UcbjW9fOSFoJTNCviGiK",
        initialDoc: '/files/CO_SERVICE.pdf',
      },
      viewer.current,
    ).then((instance) => {
      
      instance.disableElements(['searchButton']);
      instance.disableElements(['downloadButton']);

      instance.enableElements(['leftPanelButton', 'downloadButton', 'fileAttachmentDownload']);

      const fitButton = {
        type: 'actionButton',
        img: 'https://www.svgrepo.com/show/55866/folded-code-page.svg',
        onClick: () => {
          instance.setFitMode(instance.FitMode.FitWidth);
        },
        dataElement: 'alertButton',
      }

      const downloadButton = {
        type: 'actionButton',
        img: 'https://cdn-icons-png.flaticon.com/512/60/60721.png',
        onClick: () => {
          instance.downloadPdf()
        },
      }

      instance.setHeaderItems((header) => {
        header.push(fitButton)
        header.push(downloadButton)
      })
    });
  }, []);

  return (
    <div className="App">
      <div className="header">pdfjs express test</div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
};

export default App;
