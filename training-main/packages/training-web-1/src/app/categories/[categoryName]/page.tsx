//'use client';

type Props = {
  params: { categoryName: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// ★:props からパスパラメーター、URL 検索パラメーターが参照できる
export default function Page({ params, searchParams }: Props) {
  const page = typeof searchParams.page === "string" ? searchParams.page : "1";

  //useRoute hookの使用。これでもナビゲーションを発火できる。
  // 特に理由がなければLinkコンポーネントを使う
  //const router = useRouter();

  return (
    <div>
      <h1>カテゴリー別一覧画面</h1>
      <h2>カテゴリー「{params.categoryName}」</h2>
      <p>ページ番号：「{page}」</p>

      {/* <button onClick={() => {
        router.push("/categories");
      }}>
        カテゴリ一覧に戻る
      </button>
      <button onClick={() => router.back()}>戻る</button> */}
    </div>
  );
}
