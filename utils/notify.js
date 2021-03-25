import toastr from 'toastr';

// This is the settings for the notification component
const notify = {
  success: (message) => {
    toastr.options = {
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-top-center',
    };
    toastr.clear();
    return toastr.success(message);
  },
  error: (message) => {
    toastr.options = {
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-top-center',
    };
    toastr.clear();
    return toastr.error(message);
  },
  info: (message) => {
    toastr.options = {
      closeButton: true,
      progressBar: false,
      positionClass: 'toast-top-center',
    };
    toastr.clear();
    return toastr.info(message);
  },
};

export default notify;
