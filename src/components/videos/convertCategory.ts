export const convertCategory = (categoryId: string): string => {
    let category: string;
    switch (categoryId) {
        case '1':
            category = '映画とアニメ';
            break;
        case '2':
            category = '自動車と乗り物';
            break;
        case '10':
            category = '音楽';
            break;
        case '15':
            category = 'ペットと動物';
            break;
        case '17':
            category = 'スポーツ';
            break;
        case '18':
            category = 'ショート ムービー';
            break;
        case '19':
            category = '旅行とイベント';
            break;
        case '20':
            category = 'ゲーム';
            break;
        case '21':
            category = '動画ブログ';
            break;
        case '22':
            category = 'ブログ';
            break;
        case '23':
            category = 'コメディー';
            break;
        case '24':
            category = 'エンターテイメント';
            break;
        case '25':
            category = 'ニュースと政治';
            break;
        case '26':
            category = 'ハウツーとスタイル';
            break;
        case '27':
            category = '教育';
            break;
        case '28':
            category = '科学と技術';
            break;
        case '30':
            category = '映画';
            break;
        case '31':
            category = 'アニメ';
            break;
        case '32':
            category = 'アクション/アドベンチャー	';
            break;
        case '33':
            category = 'クラシック';
            break;
        case '34':
            category = 'コメディー';
            break;
        case '35':
            category = 'ドキュメンタリー';
            break;
        case '36':
            category = 'ドラマ';
            break;
        case '37':
            category = '家族向け';
            break;
        case '38':
            category = '海外';
            break;
        case '39':
            category = 'ホラー';
            break;
        case '40':
            category = 'SF/ファンタジー';
            break;
        case '41':
            category = 'サスペンス';
            break;
        case '42':
            category = '短編';
            break;
        case '43':
            category = '番組';
            break;
        case '44':
            category = '予告編';
            break;
    }
    return category;
};
