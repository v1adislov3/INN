
const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timezone: 'UTC',
};

const arrIfConnent = [-1, 5, 7, 9, 4, 6, 10, 5, 7];


class Inn {
    constructor(numberInn) {
        this.index = numberInn;
    }
    getArr() {
        return this.index.split('');
    }

    ifConnent() {
        let calc = this.getArr().map((item, index) => item * arrIfConnent[index]);
        calc.pop();
        let sum = calc.reduce((sum, i) => sum + i, 0);
        let corrent = sum % 11 == (this.getArr()[this.getArr().length - 1] == 0 ? 10 : this.getArr()[this.getArr().length - 1]);

        return (this.getArr().length == 10 && corrent) ? true : false;
    }
    birth() {
        let dataUser = new Date(1900, 0, 31);
        dataUser.setDate(this.getArr().splice(0, 5).join(""));
        return dataUser;

    }
    howManyYears() {
        let dataNow = new Date();
        let deff = 0;
        deff = dataNow.getFullYear() - this.birth().getFullYear();
        if (dataNow.getMonth() < this.birth().getMonth()) {
            deff -= 1;
        } else if (dataNow.getMonth() == this.birth().getMonth()) {
            if (dataNow.getDate() < this.birth().getDate()) {
                deff -= 1;
            }
        }
        return deff;
    }
    gender() {
        return this.getArr()[8] % 2 == 0 ? 'Женщина' : 'Мужчина';
    }
    result() {
        return alert(`Запрос ИНН: ${this.index} ,  Пол: ${this.gender()} , Родился : ${this.birth().toLocaleString("ru", options)},  Возраст: ${this.howManyYears()} лет`)
    }


}

let showInfo = new Inn(prompt('Введите ИНН'));
if (showInfo.ifConnent()) {
    showInfo.result()
} else {
    alert('Неверный данные')
}

