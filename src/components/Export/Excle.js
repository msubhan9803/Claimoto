
import React, { forwardRef } from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const ExportExcle = forwardRef(({ data, file_name }, ref) => {

    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const excle_data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(excle_data, fileName + fileExtension);
    }

    return (
        <button ref={ref} className='btn theme-btn-1 btn-round-12 zindexNormal' onClick={(e) => exportToCSV(data, file_name)}>Export</button>
    )
});

export default ExportExcle;