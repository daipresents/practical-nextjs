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
