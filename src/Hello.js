// Hello コンポーネントを作成
// 他のファイルで Hello コンポーネントを利用できるようにするため
// export しておく
// name, handleChangeName, initialName を親コンポーネントから
// props として受け取る
export const Hello = ({ name, handleChangeName, initialName }) => {
  return (
    <div className="App">
      <p>
        {/* 状態変数/現在の値 name */}
        Hello, <b>{name} !!</b>
        <br />
        {/* 状態変数/現在の値 name が更新されても
            初期値 initialName は保持されている */}
        name の初期値: <b>{initialName}</b>
      </p>
      {/* フォームにテキストを入力すると、入力したテキストが。
          リアルタイムで 状態変数/現在の値 name が更新される */}
      <input type="text" onChange={handleChangeName} />
    </div>
  );
};
