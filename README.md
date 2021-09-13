# Trend Tube

## URL

https://trend-tube-2s9iuob9r-ken2122.vercel.app/

## 使用技術

Next.js  
TypeScript  
Material-ui  
Tailwind CSS  
YouTube Data API

## 作成した目的

1. Youtube Data api から様々なジャンルの急上昇動画を取得し、人気の傾向を分析する。
1. Youtube Data api を使用する中で、外部の API を扱う練習をする。
1. Tailwind CSS を扱う練習をする。

## 機能

### 検索フィルタ

1. ヘッダー右側にある入力欄に任意の検索ワードを入力することで、  
   検索ワードと部分一致したタイトル、チャンネルタイトルを含む動画のみが表示される。

<img width="700" alt="検索前" src=https://user-images.githubusercontent.com/78861708/133035061-c175ac74-fdd3-4012-b113-36335c290fb1.png>
<br>
<br>
<img width="700" alt="検索後" src=https://user-images.githubusercontent.com/78861708/133035071-17f61bb2-c2c7-4265-a184-220541b42ea2.png>

## ISR

本アプリは Next.js の ISR を用いて作成しております。  
revalidate の値を 1800 に設定しているため、前回のアクセスから 30 分後にアクセスすると、表示内容に更新がかかるようになっております。  
これにより、SSR よりもページの表示を高速にし、かつ YouTube Data API の使用料を最小限に抑えております。
