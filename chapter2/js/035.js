const myUrl = 'http://example.com/?id=123456&name=Suzuki&age=28';

const a = myUrl.split('&');
console.log(a);

const b = myUrl.split(/&|\?/); // &は正規記号×　?は正規記号〇　直前にバックスラッシュつけないと認識不可　|はor　複数指定は/で挟む
console.log(b);

const c = 'javascript';
const d = c.split('');
console.log(d);
