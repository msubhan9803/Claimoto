import swal from 'sweetalert';
export const SweetAlert = ({title , text , icon }) => {
    console.log("tile" , title)
    swal({
        title: title,
        text: text,
        icon: icon,
      });
};
