const myFruit = 'りんご';


switch(myFruit){
  case 'りんご':
    console.log('りんごです');
    break;
  case 'みかん':
    console.log('みかんやで');
    break;
  default:
    console.log('その他やんす');
    break;
}

switch(myFruit){ //break;つけ忘れは全部実行
  case 'りんご':
    console.log('りんごです');
  case 'みかん':
    console.log('みかんやで');
  default:
    console.log('その他やんす');
}


switch(myFruit){ //雑なグループ分けも可能
  case 'りんご':
  case 'みかん':
    console.log('apple or orange');
  default:
    console.log('その他やんす');
}
