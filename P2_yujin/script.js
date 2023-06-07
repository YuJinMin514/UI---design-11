    // 현재 시간을 표시하는 함수
    function showCurrentTime() {
      var currentTime = new Date(); // 현재 시간 가져오기
      var hours = currentTime.getHours(); // 시간
      var minutes = currentTime.getMinutes(); // 분
      var seconds = currentTime.getSeconds(); // 초

      // 시, 분, 초를 두 자리 숫자로 표시하기 위해 10 미만인 경우 '0'을 추가
      hours = (hours < 10 ? "0" : "") + hours;
      minutes = (minutes < 10 ? "0" : "") + minutes;
      seconds = (seconds < 10 ? "0" : "") + seconds;

      // 시간 문자열 생성
      var timeString = hours + ":" + minutes + ":" + seconds;

      // 시간을 표시할 요소에 값을 설정
      document.getElementById("clock").innerHTML = timeString;
    }

    // 1초마다 showCurrentTime 함수 호출하여 시간 업데이트
    setInterval(showCurrentTime, 1000);


         var canvas = document.getElementById('myCanvas');
        var context = canvas.getContext('2d');

        context.beginPath();
        context.moveTo(50, 100);
        context.quadraticCurveTo(200, 10, 350, 100);
        context.strokeStyle = 'lightgray';
        context.lineWidth = 1.5;
        context.stroke();
     


// 클릭시 화면 없어지는 등의 효과
 function showRectangle(rectangle) {
            if (rectangle.style.display === 'none') {
                rectangle.style.display = 'block';
            } else {
                rectangle.style.display = 'none';
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            var circle = document.querySelector('.circle');
            circle.addEventListener('click', function() {
                var rectangle = document.querySelector('.rectangle');
                showRectangle(rectangle);
            });

            var circle2 = document.querySelector('.circle_2');
            circle2.addEventListener('click', function() {
                var rectangle2 = document.querySelector('.rectangle_2');
                showRectangle(rectangle2);
            });
            var circle3 = document.querySelector('.circle_3');
            circle3.addEventListener('click', function() {
                var rectangle3 = document.querySelector('.rectangle_3');
                showRectangle(rectangle3);
            });
            var circle4 = document.querySelector('.circle_4');
            circle4.addEventListener('click', function() {
                var rectangle4 = document.querySelector('.rectangle_4');
                showRectangle(rectangle4);
            });
            var circle5 = document.querySelector('.circle_5');
            circle5.addEventListener('click', function() {
                var rectangle5 = document.querySelector('.rectangle_5');
                showRectangle(rectangle5);
            });
            var circle6 = document.querySelector('.circle_6');
            circle6.addEventListener('click', function() {
                var rectangle6= document.querySelector('.rectangle_6');
                showRectangle(rectangle6);
            });
            var circle7 = document.querySelector('.circle_7');
            circle7.addEventListener('click', function() {
                var rectangle7 = document.querySelector('.rectangle_7');
                showRectangle(rectangle7);
            });


            var rectangle = document.querySelector('.rectangle');
            rectangle.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            });

            var rectangle2 = document.querySelector('.rectangle_2');
            rectangle2.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            });
            var rectangle3 = document.querySelector('.rectangle_3');
            rectangle3.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            }); 
            var rectangle4 = document.querySelector('.rectangle_4');
            rectangle4.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            });    
            var rectangle5 = document.querySelector('.rectangle_5');
            rectangle5.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            });                
            var rectangle6 = document.querySelector('.rectangle_6');
            rectangle6.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            });    
            var rectangle7 = document.querySelector('.rectangle_7');
            rectangle7.addEventListener('click', function(event) {
                event.stopPropagation();
                this.style.display = 'none';
            });                
        });
