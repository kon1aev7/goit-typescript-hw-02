import { Toaster } from 'react-hot-toast';

type ErrorMessageProps = {
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center',
};

export default function ErrorMessage({
  position = 'top-right',
}: ErrorMessageProps) {
  return <Toaster position={position} reverseOrder={false} />;
}
