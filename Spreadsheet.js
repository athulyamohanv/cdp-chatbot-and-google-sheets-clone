import React, { useState } from 'react';
import DataGrid from 'react-data-grid';
import './App.css';

const defaultRows = Array.from({ length: 10 }, (_, i) =>
    Array.from({ length: 5 }, (_, j) => ({ id: `${i}-${j}`, value: '' }))
);

function App() {
    const [rows, setRows] = useState(defaultRows);

    const updateCell = (rowIdx, colIdx, value) => {
        const newRows = [...rows];
        newRows[rowIdx][colIdx].value = value;
        setRows(newRows);
    };

    const columns = Array.from({ length: 5 }, (_, i) => ({
        key: i.toString(),
        name: `Column ${i + 1}`,
        editable: true,
        formatter: ({ row, column }) => (
            <input
                type="text"
                value={row[column.key].value}
                onChange={(e) => updateCell(row.id.split('-')[0], column.key, e.target.value)}
            />
        ),
    }));

    return (
        <div>
            <h1>Google Sheets Clone</h1>
            <DataGrid columns={columns} rows={rows} />
        </div>
    );
}

export default App;
