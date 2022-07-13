import { format } from "date-fns";

export default function DateComponent({ dateString, classNames }) {
  return (
    <time dateTime={dateString} className={classNames}>
      {format(new Date(dateString), "LLLL	d, yyyy")}
    </time>
  );
}
