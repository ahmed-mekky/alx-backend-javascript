export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array.keys()) {
    var value = array[idx];
    array[idx] = appendString + value;
  }

  return array;
}
