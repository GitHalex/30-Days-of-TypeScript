var str = "I love JavaScript love";
var patternBoolean = /love/;
var result = patternBoolean.test(str);
console.log(result);
var patternArray = /love/g;
var resultadoArr = str.match(patternArray);
if (resultadoArr) {
    console.log(resultadoArr);
}
else {
    console.log("No match found");
}
var txt = "Python es el lenguaje más bello que ha creado el ser humano.\
Recomiendo python para un primer lenguaje de programación";
var matchReplaced = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);
var matchReplacedGlobal = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplacedGlobal);
var txtEspecial = "%So%y p%r%%of%%es%or%a% y m%e %% enc%an%ta en%se%ña%r.\
N%o h%a%y n%a%d%a mas g%r%at%if%icante q%ue e%d%uc%a%r y c%a%p%ac%i%ta%r %a l%a g%e%n%t%e.\
L%a e%n%%señ%anza m%e %p%ar%ec%e ma%s% i%n%te%r%esa%nt%e que %cu%alq%uie%r %otro t%ra%ba%jo.\
E%s%t%o te mo%ti%v%a a s%er p%ro%fe%sor.";
var especial = txtEspecial.replace(/%/g, "");
console.log(especial);
