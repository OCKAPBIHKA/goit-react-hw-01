import cssTrans from "./TransactionHistory.module.css";

const { transactionScreen } = cssTrans;

function TransactionHistory({ items }) {
  const transactionsElements = items.map((item) => {
    return (
      <tr key={item.id}>
        <th>{item.type}</th>
        <th>{item.amount}</th>
        <th>{item.currency}</th>
      </tr>
    );
  });

  return (
    <table className={transactionScreen}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{transactionsElements}</tbody>
    </table>
  );
}
export default TransactionHistory;
