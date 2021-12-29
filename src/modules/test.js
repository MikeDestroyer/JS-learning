
class First {
    hello() {
        console.log(`Привет я метод родителя!`);
    }
}

class Second extends First {
    hello() {
        super.hello()
        console.log(`А я наследуемый метод!`);
    }
}

const log = new Second()

console.log(log.hello());

export default Second