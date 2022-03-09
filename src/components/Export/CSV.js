import React, { forwardRef } from 'react';
import { CSVLink } from "react-csv";



const CSVExport = forwardRef(({data, file_name}, ref) => {

    return (<CSVLink ref={ref} filename={file_name} className='btn theme-btn-1 btn-round-12 zindexNormal' data={data.csv_data} headers={data.headers}>
        CSV
    </CSVLink>);
});

export default CSVExport;
