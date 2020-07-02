window.addEventListener('load', init);
  function init(){

    const searchWortText = document.querySelector('#search-word-input');
    const prefectureList = document.querySelectorAll('#prefecture-list button');
    console.log(searchWortText);
    console.log(prefectureList);

    searchWortText.addEventListener('keyup',() => {
      const searchWord = searchWortText.value;
      console.log(searchWord);

      prefectureList.forEach((element) => {
        if(!searchWord || searchWord === ''){
          element.classList.remove('hide');
          return;
        }

        const prefectureName = element.dataset.name;
        const phonetic = element.dataset.phonetic;
        console.log(prefectureName);
        console.log(phonetic);

        if(searchWord.charAt(0) === prefectureName.charAt(0) || searchWord.charAt(0) === phonetic.charAt(0)){
          element.classList.remove('hide');
        }else{
          element.classList.add('hide');
        }
      });
    });
  }
