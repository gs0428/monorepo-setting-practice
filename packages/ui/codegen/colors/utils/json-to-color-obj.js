/** primary, success, information, ... -> key라고 지칭
 *  각각의 normal, hover, active, ... -> value라고 지칭
 *  위 정보들을 포함하도록 객체를 생성하여 반환하는 함수
 *  ex) primary.normal, success.hover, ...*/

const jsonToColorObj = (colors) => {
  // 반환할 colors를 빈 객체로 생성
  const colorObj = {};

  // 모든 key에 대해 반복문
  Object.entries(colors).forEach(([key, value]) => {
    /** key의 이름으로 빈 객체 생성
     *  ex) primary = {}*/
    colorObj[key] = {};

    /** key의 모든 value에 대해 반복문을 돌며 값 넣기
     *  ex) primary.normal = #FFAE22*/
    Object.entries(value).forEach(([k, v]) => (colorObj[key][k] = v.value));
  });

  return colorObj;
};

export default jsonToColorObj;
