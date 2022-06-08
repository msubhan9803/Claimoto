import React, { createRef } from 'react'
import CSVExport from 'components/Export/CSV'
import ExportExcle from 'components/Export/Excle'


function ExportComponent({ exportData }) {
    //Refs
    let excel_export = createRef();
    let csv_export = createRef();

    const _download = (event) => {
        switch (parseInt(event.target.value)) {
            case 1:
                csv_export.current.link.click();
                break;
            case 2:
                excel_export.current.click();
                break;

            default:
                break;
        }
    }






    return (
        <React.Fragment>

            <li>
                <div className="short-by text-center">
                    <select onChange={_download} value="" className="nice-select">
                        <option disabled value={""}>Download</option>
                        <option value={1} >
                            CSV
                        </option>
                        <option value={2} >
                            Excle
                        </option>

                    </select>
                </div>
            </li>
            <li>
                <div className="btn-wrapper text-center mt-0 d-none">
                    <CSVExport ref={csv_export} data={{ header: exportData()?.header, csv_data: exportData()?._data }} file_name={exportData()?.file_name || ""} />
                    <ExportExcle ref={excel_export} data={exportData()?._data} file_name={exportData()?.file_name || ""} />

                    {/* <ExcleExport /> */}
                </div>
            </li>
        </React.Fragment>
    )
}

export default ExportComponent;
