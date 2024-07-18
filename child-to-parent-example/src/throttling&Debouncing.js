function debounce(func, wait) {
    let timeout;
    return function(...args) {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  }
  
  // Usage example:
  const debouncedFunction = debounce(() => {
    console.log('Debounced function executed');
  }, 1000);
  
  // This will only execute the debouncedFunction once, 300ms after the last call
  window.addEventListener('resize', debouncedFunction);

  
  function throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
      const context = this;
      if (!lastRan) {
        func.apply(context, args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(function() {
          if (Date.now() - lastRan >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  }
  
  // Usage example:
  const throttledFunction = throttle(() => {
    console.log('Throttled function executed');
  }, 1000);
  
  // This will execute the throttledFunction at most once every 1000ms
  window.addEventListener('resize', throttledFunction);
  