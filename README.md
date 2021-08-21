# Trend Tube

## URL

https://trend-tube-kxuz4md9l-ken2122.vercel.app/

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

## ISR

本アプリは Next.js の ISR を用いて作成しております。  
revalidate の値を 1800 に設定しているため、前回のアクセスから 30 分後にアクセスすると、表示内容に更新がかかるようになっております。  
これにより、SSR よりもページの表示を高速にし、かつ YouTube Data API の使用料を最小限に抑えております。
