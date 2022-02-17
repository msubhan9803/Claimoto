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


export const confirmAlert = ({}) => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
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


