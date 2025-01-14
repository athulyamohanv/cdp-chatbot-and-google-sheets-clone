export function SUM(range) {
    return range.reduce((acc, cell) => acc + parseFloat(cell.value || 0), 0);
}

export function AVERAGE(range) {
    return SUM(range) / range.length;
}

export function MAX(range) {
    return Math.max(...range.map((cell) => parseFloat(cell.value || 0)));
}

export function MIN(range) {
    return Math.min(...range.map((cell) => parseFloat(cell.value || 0)));
}

export function COUNT(range) {
    return range.filter((cell) => cell.value !== '').length;
}
