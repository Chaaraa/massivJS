/*function exercises1() {
    const n = 10;
    const mas = [];

    for (let i = 0; i < n; i = i + 1) {
        const element = +(prompt(`Введіть ${i+1} елемент масиву`) || 0);
        mas.push(element);
    }

    let sum = 0;
    mas.forEach(element => {
        console.log(element);
        sum = sum + element;
    })

    console.log(`Сума елементів: ${sum}`);
}
exercises1();

 */

/*function exercise2(){
    const n = 7;
    const mas = [];

    for (let i = 0; i < n; i = i + 1) {
        const element = +(prompt(`Введіть ${i+1} елемент масиву`) || 0);
        mas.push(element);
    }

    let result = 1;

    mas.forEach(element  => {
        console.log(element);
        if(element>0){
        result = result * element;
        }
    })

    console.log(`Сума елементів: ${result}`);
}

exercise2();
*/

/*
function exercises3() {
    let n = 9;
    let mas = [];

    for (let i = 0; i < n; i = i + 1) {
        const element = +(prompt(`Введіть ${i+1} число масиву`) || 0);
        mas.push(element);
    }

    let count = 0;
    mas.forEach(element => {
        if (element < 0){
            count = count + 1;
        }
    })

    console.log(`Сума від'ємних елементів масиву ${count}`);
}
exercises3();
*/

/*
function exercises4() {
    let n = 6;
    let mas = [];

    for (let i = 0; i < n; i++) {
        let element = +(prompt(`Введіть ${i+1} елемент масиву`) || 0);
        mas.push(element);
    }

    let max = mas[0];

    mas.forEach(element => {
        for(let i= 1; i < n; i = i + 1){
            if (mas[i] > max){
                max = mas[i];
            }
        }
    })

    console.log(max);
}
exercises4();
*/

/*
function exercises5() {
    let n = 12;
    let mas = [];

    for (let i = 0; i < n; i = i + 1) {
        let element = +(prompt(`Введіть ${i + 1} елемент масиву`) || 0);
        mas.push(element);
    }

    let max = mas [0];

    for (let i = 1; i < n; i = i + 1) {
        if (mas[i] > max) {
            max = mas[i];
        }
    }

    let count = 0;

    mas.forEach((val) => {
        if (val >= max * 0.7) {
            count = count + 1;
        }
    });

    console.log(count);

}
exercises5();
 */

