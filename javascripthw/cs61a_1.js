
function a_plus_abs_b(a, b) {
    /*Return a+abs(b), but without calling abs.

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    5
    >>> # a check that you didn't change the return statement!
    >>> import inspect, re
    >>> re.findall(r'^\s*(return .*)', inspect.getsource(a_plus_abs_b), re.M)
    ['return f(a, b)']
    */
    if (b < 0) {
        let new_b = -b;
    }
   
    return a + new_b;
}
console.log(a_plus_abs_b(3,4));


function two_of_three(x, y, z) {
    /*Return a*a + b*b, where a and b are the two smallest members of the
    positive numbers x, y, and z.

    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50
    >>> # check that your code consists of nothing but an expression (this docstring)
    >>> # a return statement
    >>> import inspect, ast
    >>> [type(x).__name__ for x in ast.parse(inspect.getsource(two_of_three)).body[0].body]
    ['Expr', 'Return']
    */

    return x*x + y*y + z*z - Math.max(x,y,z)**2
}

function largest_factor(n) {
    */Return the largest factor of n that is smaller than n.

    >>> largest_factor(15) # factors are 1, 3, 5
    5
    >>> largest_factor(80) # factors are 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> largest_factor(13) # factor is 1 since 13 is prime
    1
    */
    let x = n - 1;
    while (true) {
        if (n % x == 0) {
            return x;
        }
                    
        x = x - 1;
    }
        
}

function if_function(condition, true_result, false_result) {
    /*Return true_result if condition is a true value, and
    false_result otherwise.

    >>> if_function(True, 2, 3)
    2
    >>> if_function(False, 2, 3)
    3
    >>> if_function(3==2, 3+2, 3-2)
    1
    >>> if_function(3>2, 3+2, 3-2)
    5
    */
    if (condition) {
        return true_result;
    }
    else {
        return false_result;
    }
}

function with_if_statement(){
    /*
    >>> result = with_if_statement()
    47
    >>> print(result)
    None
    */
    if (cond()) {
        return true_func();
    }
    else{
        return false_func();
    }
}
     

function with_if_function(){
    /*
    >>> result = with_if_function()
    42
    47
    >>> print(result)
    None
    */
    return if_function(cond(), true_func(), false_func());
}

function cond() {
    return false;
}

function true_func(){
    console.log(42);
}

function false_func(){
    console.log(47);
}


function hailstone(n){
    /*Print the hailstone sequence starting at n and return its
    length.

    >>> a = hailstone(10)
    10
    5
    16
    8
    4
    2
    1
    >>> a
    7
    """*/
    let len = 1
    while (n !== 1){
        console.log(n);
        if (n % 2 == 0) {
            n = Math.floor(n/2);
        }
        else{
            n = n * 3 + 1
        }
        len += 1;
    }
    console.log(1);
    return len;
}


