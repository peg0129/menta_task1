window.addEventListener('load', init);
  function init(){
    document.querySelector('#tweetButton').addEventListener('click',() => {
      let tweetText = document.querySelector('#tweetTextArea').value;
      tweetText += ' #Javascript';
      const encodedText = encodeURIComponent(tweetText); //文字列をURIへ変換→エンコード
      const tweetURL = `https://twitter.com/intent/tweet?text=${encodedText}`;
      window.open(tweetURL);
    });
  }

//URIを文字列へ変換→デコード
//decodeURIComponent()
//文字以外はそのまま変換される
