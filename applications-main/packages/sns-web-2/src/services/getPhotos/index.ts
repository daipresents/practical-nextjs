import type { PaginationProps } from "sns-shared-ui/src/components/Pagination";
import { handleFailed, handleSucceed, path } from "../";
import type { Photo } from "../type";

type Props = {
  page?: string;
  take?: string;
  authorId?: string;
  revalidate?: number;
};

export function getPhotos({
  page = "1",
  take = "10",
  authorId,
  revalidate,
}: Props): Promise<{ photos: Photo[]; pagination: PaginationProps }> {
  // authorId が含まれると、特定ユーザーの投稿一覧取得に絞り込まれる
  const searchParams = new URLSearchParams({
    page,
    take,
    // authorIdがあれば { page: '1', take: '15', authorId: '001' } のような形で追加
    ...(authorId && { authorId }),
  });

  console.log(searchParams);

  return fetch(path(`/api/photos?${searchParams}`), {
    next: {
      ...(authorId && { tags: [`photos?authorId=${authorId}`] }),
      ...(revalidate !== undefined && { revalidate }),
    },
  })
    .then(handleSucceed)
    .catch(handleFailed);
}
