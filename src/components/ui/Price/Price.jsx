export default function Price({ price, className }) {
  return (
    <p className={className}>
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'EUR',
      })
        .format(price)
        .replace(/,/g, ' ')}
    </p>
  );
}
