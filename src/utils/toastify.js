import { toast } from "react-toastify";

const showToast = (type = 'success', message = 'no message', promise) => {
    switch (type) {
        case 'success':
            toast.success(message);
            break;
        case 'error':
            toast.error(message);
            break;
        case 'warning':
            toast.warning(message);
            break;
        case 'info':
            toast.info(message);
            break;
        case 'promise':
            if (true) {
                toast.promise(
                    promise,
                    {
                        pending: 'Processing...',
                        success: message || 'Success!',
                        error: 'Error occurred!',
                    }
                );
            }
            break;
        default:
            toast(message);
    }
};

export { showToast } 