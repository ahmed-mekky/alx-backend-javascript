export default function getListStudentIds(obj) {
    if (!Array.isArray(obj)) return [];
    return obj.reduce((acc, x) => acc + x.id, 0);
}
