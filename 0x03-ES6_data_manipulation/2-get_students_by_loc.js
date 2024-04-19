export default function getStudentsByLocation(obj, city) {
  if (!Array.isArray(obj)) return [];
  return obj.filter((x) => x.location == city);
}
