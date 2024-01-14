import dayjs from "dayjs";

function getHourInfo(date: string) {
  return dayjs(date).format("HH:mm");
}

export default { getHourInfo };
