(function($) {

  getBrowserScrollbarWidth = function() {
    var outer, outerStyle, scrollbarWidth;
    outer               = document.createElement('div');
    outerStyle          = outer.style;
    outerStyle.position = 'absolute';
    outerStyle.width    = '100px';
    outerStyle.height   = '100px';
    outerStyle.overflow = 'scroll';
    outerStyle.top      = '-9999px';
    document.body.appendChild(outer);
    scrollbarWidth      = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  };



  syncCols = function(opts) {
      
    opts.targetTdL = opts.targetTd.length;
      
    for(var i = 0; i < opts.targetTdL; i++){
      var t = opts.targetTd[i];
      var m = opts.modelTd[i];
      t.style.width = m.offsetWidth + 'px';
    }
  };


  window.scrollingTable = function() {

    syncCols({
      target:   document.querySelectorAll('.ScrollingTable-head table'),
      targetTd: document.querySelectorAll('.ScrollingTable-head th'),
      model:    document.querySelectorAll('.ScrollingTable-body table'),
      modelTd:  document.querySelectorAll('.ScrollingTable-body td')
    });

    var scrollbarWidth = getBrowserScrollbarWidth() + 'px',
        elHead         = document.querySelectorAll('.ScrollingTable-head'),
        elBody         = document.querySelectorAll('.ScrollingTable-body');

    for (i=0, l = elHead.length; i < l; i++) {
      elHead[i].style.paddingRight = scrollbarWidth
    };

    for (i=0, l = elBody.length; i < l; i++) {
      var theadHeight = elHead[i].offsetHeight;
      elBody[i].style.paddingTop = theadHeight + 'px';
      elBody[i].style.top        = -(theadHeight +1) + 'px';
    };

  };

})();