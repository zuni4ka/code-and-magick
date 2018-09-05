var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
    var maxElement = 0;
   if (arr.length === '') {
     return false;
   }
   for (var i = 0; i < arr.length; ++i) {
     maxElement = arr[i] > maxElement ? arr[i] : maxElement;
   }
    return maxElement;
  };

  window.renderStatistics = function(ctx, names, times) {
    
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, 'white');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = "Black";
    ctx.textBaseline = 'top';
    ctx.fillText('Ура вы победили!', (CLOUD_X + CLOUD_WIDTH) * 0.5 - TEXT_WIDTH + GAP, CLOUD_Y + GAP * 1.5);
    ctx.fillText('Список результатов:', (CLOUD_X + CLOUD_WIDTH) * 0.5 - TEXT_WIDTH, CLOUD_Y + GAP * 1.5 + FONT_GAP);

    var maxTime = getMaxElement(times);
  
    for (var i = 0; i < names.length; ++i) {
        ctx.fillStyle = 'rgba(0, 0, 255, ' + Math.random() + ')';
        if (names[i] === 'Вы') {
          ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        }
        ctx.fillRect(CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - GAP * 2, BAR_WIDTH, BAR_HEIGHT * times[i] / maxTime);
    
        ctx.fillStyle = 'Black';
        ctx.fillText(names[i], CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_HEIGHT - GAP);
    
        ctx.fillText(Math.round(times[i]), CLOUD_X + TEXT_WIDTH + (BAR_WIDTH + TEXT_WIDTH) * i, CLOUD_HEIGHT - BAR_HEIGHT * times[i] / maxTime - GAP * 5);
      }
    };