import swal from 'sweetalert';
import moment from "moment";
import validator from 'validator';

export const SweetAlert = ({ title, text, icon }) => {
  swal({
    title: title,
    text: text,
    icon: icon,
  });
};



export const currencyMap = (e) => {
  let value = e.target?.value
  value = value?.replace(/\D/g, "")
  value = value?.replace(/(\d)(\d{2})$/,"$1.$2")
  value = value?.replace(/(?=(\d{3})+(\D))\B/g,",")
  e.target.value = value

  return e 
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


