$(document).ready(function () {
  $('#start').click(function (e) {
    e.preventDefault();
    const width = $('#width').val();
    const growAmmount = parseInt($('#growth_ammount').val());
    const growRate = parseInt($('#grow_rate').val());
    

    for (let i = 0; i < parseInt($('#total').val()); i++) {
      let circle = $("<div class='circle'></div>");
      let pos = randPosition();
      let color = '#' + randomColor();
      circle.css(
        {
          width: width + 'px',
          height: width + 'px',
          backgroundColor: color
        });
      circle.offset(
        {
          top: (pos.x + i),
          left: (pos.y + i)
        }
      );

      const interval = grow(circle);

      circle.on('click', () => {
        clearInterval(interval)
        circle.remove();
      });

      $("#circles").append(circle);
    }

    function grow(circle) {
      return setInterval(() => {
        const width = circle.width() + growAmmount;
        circle.width(width);
        circle.height(width);
      }, growRate);
    }

    function randPosition() {
      const posx = (Math.random() * (Math.random() * 10 + 50)).toFixed();
      const posy = (Math.random() * (Math.random() * 10 + 50)).toFixed();
      return { x: posx, y: posy };
    }

    function randomColor() {
      return Math.floor(Math.random()*16777215).toString(16);
    }

  });

});