export default  function Stats({ items }) {
  if (!items.length) {
    return (
      <footer>
        <strong>Start addding some items to your packing list 🛬</strong>
      </footer>
    );
  }

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer>
      <strong>
        {percentage === 100
          ? "you got everything !!  ready to go 🛬"
          : `
          🎒 You have ${numItems} items on your list , and you already packed ${numPacked} (${percentage}%)
        `}
      </strong>
    </footer>
  );
}