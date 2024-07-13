const str: string = "I love JavaScript love";
const patternBoolean: RegExp = /love/;
const result: boolean = patternBoolean.test(str);
console.log(result);

const patternArray: RegExp = /love/g;
const resultadoArr: string[] | null = str.match(patternArray);
if (resultadoArr) {
  console.log(resultadoArr);
} else {
  console.log("No match found");
}

const txt: string =
  "Python es el lenguaje más bello que ha creado el ser humano.\
Recomiendo python para un primer lenguaje de programación";

let matchReplaced: string = txt.replace(/Python|python/, "JavaScript");
console.log(matchReplaced);

let matchReplacedGlobal: string = txt.replace(/Python|python/g, "JavaScript");
console.log(matchReplacedGlobal);

const txtEspecial: string =
  "%So%y p%r%%of%%es%or%a% y m%e %% enc%an%ta en%se%ña%r.\
N%o h%a%y n%a%d%a mas g%r%at%if%icante q%ue e%d%uc%a%r y c%a%p%ac%i%ta%r %a l%a g%e%n%t%e.\
L%a e%n%%señ%anza m%e %p%ar%ec%e ma%s% i%n%te%r%esa%nt%e que %cu%alq%uie%r %otro t%ra%ba%jo.\
E%s%t%o te mo%ti%v%a a s%er p%ro%fe%sor.";

let especial: string = txtEspecial.replace(/%/g, "");
console.log(especial);

const patternA_a: RegExp = /[Aa]pple|[Bb]anana/g;
const txtString: string =
  "Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away has been replaced by a banana a day keeps the doctor far far away.";
const apples: string[] | null = txtString.match(patternA_a);

if (apples) {
  console.log(apples);
} else {
  console.log("No matches found");
}

const patternDig: RegExp = /\d+/g; // \d es un carácter especial que significa dígitos si agregamos + saca digitos esteros
const txtDig: string =
  "This regular expression example was made in January 12, 2020.";
const matches: string[] | null = txtDig.match(patternDig);

if (matches) {
  console.log(matches); // ["1", "2", "2", "0", "2", "0"] // ['12','2020']
} else {
  console.log("No matches found");
}
