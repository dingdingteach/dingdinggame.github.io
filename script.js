// 이미지 배열
const images = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image4.jpg'];

// 메인 이미지와 선택지 이미지 요소 가져오기
const mainImg = document.getElementById('main-img');
const choices = document.querySelectorAll('.choice');

// 선택지 이미지에 클릭 이벤트 추가
choices.forEach(choice => {
  choice.addEventListener('click', () => {
    // 선택한 이미지가 틀린 이미지인 경우
    if (choice.src.endsWith('1.jpg')) {
      alert('정답입니다!');
    } else {
      alert('틀렸습니다!');
    }
  });
});

// 랜덤한 이미지 설정
const randomImage = images[Math.floor(Math.random() * images.length)];

// 메인 이미지에 랜덤한 이미지 설정
mainImg.src = randomImage;
