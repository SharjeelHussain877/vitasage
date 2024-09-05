const formatLabel = (label) =>
    label.toLowerCase().replace(/(?:\s+|^)(\w)/g, (match, p1, offset) =>
        offset ? p1.toUpperCase() : match).replace(/\s+/g, '');

export {formatLabel}