export const truncate = (string, size) => {
  if (string.length > size) {
    return string.substring(0, string.length - '...'.length) + '...';
  } else {
    return string;
  }
}