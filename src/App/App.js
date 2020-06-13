import React, {Fragment, useRef} from 'react';
import './App.css';
import Welcome from "../Welcome/welcome";
import Info from "../Info/info";
import PDFExport from "@progress/kendo-react-pdf/dist/npm/PDFExport";


function App() {
    const pdfExport = useRef(null);

    return (
        <Fragment>
            <PDFExport
                scale={0.75}
                paperSize="A4"
                margin="0cm"
                fileName="CV-Maxim Fishman"
                ref={pdfExport}
                landscape={true}
            >
                <div className="App">
                    <Welcome/>
                    <Info/>
                </div>
            </PDFExport>
            <button className={'pdfButton'} onClick={() => pdfExport.current.save()}>generate pdf</button>
        </Fragment>
    );
}

export default App;
