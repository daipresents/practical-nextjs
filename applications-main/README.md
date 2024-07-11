# practical-nextjs-book/applications

写真投稿 SNS アプリのサンプルコードです。各 package は、書籍構成に応じて段階的に機能強化されています。

## SNS アプリサンプル

- sns-web-1: スタブデータを表示する App（第 6 章）
- sns-web-2: Prisma を導入した App（6 章〜10 章）
- sns-web-3: 改善された App（6 章〜10 章）

## SNS アプリサンプル用 API サーバー

- sns-api-1: DB なし（第 6 章）
- sns-api-2: DB あり、Prisma を使用（6 章〜10 章）

## 共通 UI ライブラリ

- sns-shared-ui: UI ライブラリ（6 章〜10 章）

## Command

```
# コンテナ起動
cd applications-main
docker compose up -d

# Prisma Studio
npm run db-studio

# Storybook
cd sns-shared-ui
npm run storybook
```

# 6.

1. App routerにおける代表的なIncremental Cacheはfetch関数によるDataキャッシュ
2. next.revalidateオプション： Time-based Revalidation

cache関数を使うときは

1. Reactコンポーネントの中ではなく外側で使う
2. 引数はプリミティブ値にする

unstable_cacheは

1. コンポーネント内で利用可能

# 9.

Progressive Enhancement

1. FormイベントをonSubmitイベントハンドラーを使用すると、JavaScriptがロードされてハイドレーションが完了するまでの間、Formイベントを送信できない
2. FormのActionに非同期関数を渡す方式によって、JavaScriptを使用しない状態でも、Formが利用できるProgressive Enhancementが有効になる

Route Handler による On-demand Revalidation

1. revalidateTagはRoute Handlerでも実行できるが、router.refresh()の併用が必須。これがないとRouterキャッシュにヒットしてしまうため、投稿後などに投稿が反映されなくなる
2. router.refresh()を実行するとRouterキャッシュが削除されるが、同時に現在のRouteレンダリングを再リクエストして、別画面に遷移する。このリクエストが余分になる
3. よって特別な理由がない限り「データの作成、更新、削除」においてRoute HandlerよりもServer Actionを優先して使用するべき
4. Route handlerでしか実現できないケースは、Next.jsアプリの外側からOn−demand Revalidationを呼び出すというケース。外部のCMSでブログ投稿され、データをNext.jsで取り込むときは、効率よくキャッシュを無効化できる
