
export default (expenses) => {
    return expenses.map(amounts => amounts.amount).reduce((acc, amount) => acc+amount, 0);
};