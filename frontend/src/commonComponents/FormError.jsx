export default function FormError({ errorsMessage, styles }) {
  return <p className={`text-danger mt-1 ${styles}`}>{errorsMessage}</p>;
}
