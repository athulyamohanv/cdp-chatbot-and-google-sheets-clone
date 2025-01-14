export function TRIM(value) {
    return value.trim();
}

export function UPPER(value) {
    return value.toUpperCase();
}

export function LOWER(value) {
    return value.toLowerCase();
}

export function REMOVE_DUPLICATES(rows) {
    return [...new Set(rows)];
}

export function FIND_AND_REPLACE(rows, find, replace) {
    return rows.map((row) => row.replace(find, replace));
}
