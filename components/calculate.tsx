import React from "react";

const Calculate = ({ price, days }: any) => {
  const cleaningFee = 21;
  const breakDownPrice = 41;
  const initialPrice = price * days;
  const total = cleaningFee + breakDownPrice + initialPrice;
  function numberWithCommas(x: number) {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <table className="w-full mt-10">
      <tbody className="space-y-[6px]">
        <tr className="flex justify-between">
          <td>
            <span>{numberWithCommas(price)}৳</span> X <span>{days} nights</span>
          </td>
          <td>{numberWithCommas(initialPrice)}৳</td>
        </tr>
        <tr className="flex justify-between">
          <td>
            <span>cleaning fee</span>
          </td>
          <td>{cleaningFee}৳</td>
        </tr>
        <tr className="flex justify-between border-b-2 pb-2">
          <td>
            <span>Show price breakdown</span>
          </td>
          <td>{breakDownPrice}৳</td>
        </tr>
        <tr className="flex justify-between">
          <th>Total before taxes</th>
          <th>{numberWithCommas(total)}৳</th>
        </tr>
      </tbody>
    </table>
  );
};

export default Calculate;
