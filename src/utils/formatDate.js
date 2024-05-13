export const formatDate = (dateString) => {
  let formattedDate;

  if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = dateString.split("-");
    formattedDate = `${day}.${month}.${year}`;
  } else if (dateString.match(/^\d{2}.\d{2}.\d{4}$/)) {
    const [day, month, year] = dateString.split(".");
    formattedDate = `${year}-${month}-${day}`;
  } else {
    formattedDate = "Invalid date format";
  }

  return formattedDate;
};
