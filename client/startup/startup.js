Meteor.startup (function () {


    /* * * CONFIGURATION VARIABLES: EDIT BEFORE PASTING INTO YOUR WEBPAGE * * */
  /*  var disqus_shortname = 'bicobic'; // required: replace example with your forum shortname

    
    (function () {
        var s = document.createElement('script'); s.async = true;
        s.type = 'text/javascript';
        s.src = '//' + disqus_shortname + '.disqus.com/count.js';
        (document.getElementsByTagName('HEAD')[0] || document.getElementsByTagName('BODY')[0]).appendChild(s);
    }());
*/
  
  isGanalyticsLoaded = false;
  myScriptLoader = function funcMyScriptLoader(jsEl, callback) {
    if (window.attachEvent) {
      // for IE (sometimes it doesn't send loaded event but only complete)
      jsEl.onreadystatechange = function funcOnReadyStateChange() {
        if (jsEl.readyState === 'complete') {
          jsEl.onreadystatechange = "";
        } else if (jsEl.readyState === 'loaded') {
          jsEl.onreadystatechange = "";
        }

        if (typeof callback === 'function') {
          callback();
        }
      };
    } else {
      // most browsers
      jsEl.onload = function funcOnLoad () {
        if (typeof callback === 'function') {
          callback();
        }
      };
    }
  };

  Deps.autorun(function() {
    if(Session.get("loadDisqus") && !window.DISQUS) {
      var disqus_shortname = 'bicobic'; // required: replace example with your forum shortname
      
      (function() {
        var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
        dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
      })();      
      
    }
  });
  
});