export default function getStudentIdsSum(obj) {
  if (!Array.isArray(obj)) return [];
  return obj.reduce((acc, x) => acc + x.id, 0);
}
