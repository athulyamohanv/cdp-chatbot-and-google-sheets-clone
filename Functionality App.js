const saveData = async () => {
    await fetch('http://localhost:5000/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: rows }),
    });
};

const loadData = async () => {
    const response = await fetch('http://localhost:5000/load');
    const { data } = await response.json();
    setRows(data);
};

return (
    <div>
        <button onClick={saveData}>Save</button>
        <button onClick={loadData}>Load</button>
    </div>
);
