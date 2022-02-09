import swal from 'sweetalert';
export const SweetAlert = ({title , text , icon }) => {
    swal({
        title: title,
        text: text,
        icon: icon,
      });
};
