import classNames from 'classnames';
import Loader from '../Loader';

export default function Button({
  loading,
  type = 'button',
  disabled,
  className,
  children,
  onClick,
}: any) {
  const cls =
    'mt-0 flex items-center shadow shadow-gray-900  justify-center min-w-[100px] border border-gray-700 rounded-md bg-black py-2.5 px-4 text-white hover:bg-gray-950';
  return (
    <button
      type={type}
      disabled={loading || disabled}
      className={classNames(cls, className)}
      onClick={onClick}
    >
      {loading ? <Loader /> : children}
    </button>
  );
}
