//animation
XJSX.createAnimation("slide", function (node, resolve, name) {
  var previousNode = node.previousElementSibling;
  node.className = "x-body";
  if (page.animate) {
    previousNode.className += " slide";
    node.className += " slide";
    if (page.phref && page.chref === page.phref) {
      //out
      previousNode.className += " out";
      node.className += " xin";
    } else {
      //in
      previousNode.className += " xout";
      node.className += " in";
    }
    setTimeout(function () {
      previousNode && (previousNode.className = "x-body");
      node.className = "x-body";
      resolve();
    }, 1000);
  } else {
    page.animate===undefined&&(page.animate = true);
    resolve();
  }
});

page = {
  phref: undefined,
  chref: undefined,
  animate: undefined,
  href: [],
  reset: function (name) {
     name ="string"!==typeof name&&name|| page.href[0];
    page.href = [];
    if ("string" !== typeof name) {
      return;
    }
    page.open(name);
  },
  back: function () {
    var name = page.href[page.href.length - 2];
    if ("string" !== typeof name) {
      return;
    }
    page.open(name);
  },
  open: function (name) {
    if (page.chref === name) {
      page.animate = undefined;
    }
    page.phref = page.href[page.href.length - 2];
    page.chref = name;
    if (page.phref === name) {
      page.href.pop();
    } else {
      page.href.push(name);
    }
    XJSX.event.emit("page", page.chref);
  },
};
