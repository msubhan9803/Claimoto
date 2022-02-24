// import swal from 'sweetalert';
import moment from "moment";
import Swal from 'sweetalert2'

export const SweetAlert = ({ title, text, icon }) => {
  Swal.fire({
    title: title,
    text: text,
    icon: icon,
  });
};


export const msgAlert = ({title , text , icon }) => {
  Swal.fire({
      title: title,
      text: text,
      icon: icon,
    });
};

export const successAlert = ({title , text }) => {
  Swal.fire({
      title: title,
      text: text,
      icon:"success"
    });
};


export const confirmAlert = ({title, text, buttonText, action}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#205bf5',
    cancelButtonColor: '#d33',
    confirmButtonText: buttonText
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  })
}




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
  return { dateTime, date };
};


export const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


