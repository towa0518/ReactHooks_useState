// Counter コンポーネントを作成
// 他のファイルで Counter コンポーネントを利用できるようにするため
// export しておく
export const Counter = ({
  // count, countIncrement, countDecrement, countReset, initialCount を
  // 親コンポーネントから props として受け取る
  count,
  countIncrement,
  countDecrement,
  countReset,
  initialCount
}) => {
  return (
    <>
      <p>
        {/* 状態変数/現在の値 count */}
        現在のカウント数: <b>{count}</b>
        <br />
        {/* 状態変数/現在の値 count が更新されても
            初期値 initialCount は保持されている */}
        count の初期値: <b>{initialCount}</b>
      </p>

      {/* onClick で親コンポーネントから受け取った関数を実行 */}
      <button onClick={countIncrement}>increment</button>
      <button onClick={countDecrement}>decrement</button>
      <button onClick={countReset}>reset</button>
    </>
  );
};
