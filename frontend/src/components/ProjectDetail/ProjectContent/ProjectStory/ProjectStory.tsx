
export const ProjectStory = () => {

  var sentence = '\r 먹으면 머릿속이 댕댕 울리는 댕댕 사료! 입맛없는 강아지들을 저격한 바로 그 사료!\n당신의 강아지는 365일 입맛이 좋나요? 분명 아닌 날이 있을 겁니다!\n\n\n입맛이 없으면 강아지가 밥을 먹지 못하고...\n집사의 마음은 찢어지고...\n강아지가 신경쓰여 일도 못하고...\n직장을 잃고...가정이 무너지고....\n엄청난 세계의 재앙이 찾아올 겁니다.....\n\n\n밥을 먹기 위해 달려오는 당신의 강아지를 기대해보세요!\n';

  console.log(sentence);
  
  return(
    <div>
      <h1>스토리</h1>
      <div>
        {
          sentence.split('\n').map(line => {
            return (<span>{line}<br/></span>)
          })
        }
      </div>
    </div>
    );
};
