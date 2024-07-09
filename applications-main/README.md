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
