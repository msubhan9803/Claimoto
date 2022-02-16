import swal from 'sweetalert';
import moment from "moment";

export const SweetAlert = ({title , text , icon }) => {
    swal({
        title: title,
        text: text,
        icon: icon,
      });
};


export const msgAlert = ({title , text , icon }) => {
  swal({
      title: title,
      text: text,
      icon: icon,
    });
};





export const formatDateTime = (given_date) => {
  var offset;
  offset = moment().utcOffset();
  var now = new Date(given_date);
  const dateTime = moment(now)
    .utcOffset(offset)
    .format("DD-MM-YYYY hh:mm A");
  const date = moment(now)
    .utcOffset(offset)
    .format("DD-MM-YYYY");
  return {dateTime, date};
};


