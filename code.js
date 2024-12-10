function fibonacci(n) {
    function fibHelper(n, n0, n1) {
      if (n0 === 0) return a;
      if (n1 === 1) return b;
      return fibHelper(n - 1, n1, n0 + n1);
    }
  
    return fibHelper(n, 0, 1);
  }