import type { Metadata, ResolvingMetadata } from "next";

// export const metadata: Metadata = {
//   title: "写真一覧",
//   // /photos にアクセスすると
//   // descriptonは training-main/packages/training-web-4/src/app/layout.tsx のデータが継承されるが、
//   // training-main/packages/training-web-4/src/app/layout.tsxが書かれているのでこちらが勝つ
// };

type Props = {
  params: {photoId: string };
};

// 親のデータで上書きじゃなくて、抜き取って組み込むこともできる
export async function generateMetadata(
  { params }:  Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const {title} = await parent;
  return { title: `タイトルに親データ「${title?.absolute}」を入れた`}
}


export default function Page () {
  return <div>写真一覧画面</div>;
}
