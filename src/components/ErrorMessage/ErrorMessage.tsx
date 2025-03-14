import { Toaster } from 'react-hot-toast';

type ErrorMessageProps = {
  message: string;
  position?:
    | 'top-right'
    | 'top-left'
    | 'bottom-right'
    | 'bottom-left'
    | 'top-center'
    | 'bottom-center';
};

export default function ErrorMessage({
  message,
  position = 'top-right',
}: ErrorMessageProps) {
  return (
    <div>
      <Toaster position={position} reverseOrder={false} />
      <div className="error-message">{message}</div> {}
    </div>
  );
}
