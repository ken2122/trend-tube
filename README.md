# Trend Tube

## URL

https://trend-tube-cmb7ogoaf-ken2122.vercel.app/

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

### 並び替え

1. ヘッダー右側にあるセレクトボックスをクリックすると並び替えの項目が表示される。（デフォルトは人気順）  
   人気順、新着順、視聴回数順のいずれかに並び替える事ができる。

<img width="700" alt="並び替え（クリック前）" src=https://user-images.githubusercontent.com/78861708/133634120-5dd20152-9386-4892-8a67-41e6c6a7e629.png>
<br>
<br>
<img width="700" alt="並び替え（クリック後）" src=https://user-images.githubusercontent.com/78861708/133634134-ff51aeac-0301-4967-8723-04d9dd8f83d8.png>

### 詳細表示

1. 動画右下にある"詳細"ボタンをクリックすると、動画の詳細な情報が記載されたダイアログが表示される。

<img width="700" alt="詳細" src=https://user-images.githubusercontent.com/78861708/134335696-b3349743-3999-4305-aae3-8dab33fbb2a2.png>
<br>
<br>
<img width="700" alt="ダイアログ" src=https://user-images.githubusercontent.com/78861708/134335705-f17c07dd-856f-4b7d-a0d7-c84ff6835013.png>

## ISR

本アプリは Next.js の ISR を用いて作成しております。  
revalidate の値を 1800 に設定しているため、前回のアクセスから 30 分後にアクセスすると、表示内容に更新がかかるようになっております。  
これにより、SSR よりもページの表示を高速にし、かつ YouTube Data API の使用料を最小限に抑えております。
