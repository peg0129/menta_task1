if(/iPhone|iPod|iPad/.test(navigator.userAgent)){ //文字パターンを/〇/で挟む
  alert('アクセスしているブラウザーはIOS端末です');
}else{
  alert('IOS端末じゃないです');
}

if(navigator.userAgent.includes('iPhone')||navigator.userAgent.includes('iPod')||navigator.userAgent.includes('iPad')){
  alert('アクセスしているブラウザーはIOS端末です');
}else{
  alert('IOS端末じゃないです');
}
