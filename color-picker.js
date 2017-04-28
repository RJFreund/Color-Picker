var robot = require('robotjs');

setInterval(function(){
    //due to a bug in robotjs, this only works on the primary monitor, not secondary monitors
    var mousePosition = robot.getMousePos();
    var color = robot.getPixelColor(mousePosition.x, mousePosition.y);
    process.stdout.write("\r#" + color);
}, 100);


