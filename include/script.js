/*** make delay ***/
XJSX.createAnimation("delay", function (node, resolve, argument) {
        var time = argument[1];
        if ("number" === typeof time) {
          node.style.display = "none";
          setTimeout(function () {
            resolve();
            node.style.display = "";
          }, time);
        } else {
          resolve();
        }
      });