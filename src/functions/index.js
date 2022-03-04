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
      confirmButtonColor:"#205bf5"
    });
};

export const successAlert = ({title , text }) => {
  Swal.fire({
      title: title,
      text: text,
      icon:"success",
      confirmButtonColor:"#205bf5"
    });
};

export const successWithoutConfirmAlert = ({title , text }) => {
  Swal.fire({
      title: title,
      text: text,
      icon:"success",
      showConfirmButton: false
    });
};


export const confirmAlert = ({title, text, buttonText, action, notCancelButton}) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showCancelButton: notCancelButton ? false : true,
    confirmButtonColor: '#205bf5',
    cancelButtonColor: '#d33',
    confirmButtonText: buttonText,
  }).then((result) => {
    if (result.isConfirmed) {
      action();
    }
  })
}


export const _productDetailDotDot = (string, limit) => {
  var dots = "...";
  if (string.length > limit) {
      // you can also use substr instead of substring
      string = string.substring(0, limit) + dots;
  }

  return string;
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

export const getAllowActions = ({permissions, module_name}) => {
  return permissions.find(pre=>pre.ModuleSystemName === module_name)?.ModuleActions.map(act=>act.ActionName);
}