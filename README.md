# practical-nextjs

## Run

```
# Dev
npm run dev

# Lint
npm run lint

# Production
npm run build
npm run start
```

# Note

## 1.

1. Tree
2. Subtree
3. Root
4. Leaf

Domain, Segment, Path
e.g. example.com/profile/settings

1. Domain: example.com
2. Segment: profile or settings
3. Path: /profile/settings

Route Segment

1. Root Segment: /app
1. /app/profile/settings => Route Segment
1. profile: /profile
1. settings: /settings

Dynamic Route / Dynamic Segment
e.g. example.com/photos/[photoId]

1. [photoId]: Dynamic Segment

## 2

- SSR: サーバサイドレンダリング
- Sercer Component: RSC
- onClick イベントハンドラー ＞ 任意の DOM にイベントハンドラーをアタッチ ＞ UI はインタラクティブに ＝ ハイドレーション

## 3

- Dynamic Route Segment:
  - app/blog/[slug]/page.tsx
    - /blog/aaa
      - { slug: 'a' }
- Catch-all Segment(配列):
  - app/shop/[...slug]/page.tsx
    - /blog/aaa/bbb
      - { slug: ['aaa', 'bbb']}
- Optional Catch-all Segment
  - app/shop/[[...slug]]/page.tsx
    - /shop
      - {}
    - /shop/aaa/bbb
      - { slug: ['aaa', 'bbb']}

Route Groups

- (site)
  - photos
  - categories
- (static)
  - company-info
- layout.tsx
- page.tsx

# Sample

See: https://github.com/practical-nextjs-book/
