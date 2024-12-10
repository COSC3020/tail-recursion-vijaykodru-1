function fibonacci(n) {
    function fibHelper(n, n0, n1) {
        if (n === 0) return n0;  
        if (n === 1) return n1;  
        return fibHelper(n - 1, n1, n0 + n1);  
    }

    return fibHelper(n, 0, 1);  
}
