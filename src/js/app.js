// TODO: write your code here
import sum from './basic';

console.log('worked');

console.log(sum([1, 2]));

class Character {
    constructor (name, type, health, level, attack, defence) {
        this.name = name;
        this.type = type;
        this.health = health;
        this.level = level;
        this.attack = attack;
        this.defence = defence;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (value.length < 2 || value.length > 10) {
            throw new Error('Имя должно содержать от 2 до 10 символов');
        } else {
            this._name = value;
        }
        return this._name;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        if (['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].indexOf(value) === -1) {
            throw new Error('Неверный тип персонажа');
        } else {
            this._type = value;
        }
        return this._type;
    }

    get health() {
        return this._health;
    }

    set health(value) {
        this._health = value;
        if (value < 0) {
            throw new Error('Здоровье не может быть меньше нуля');
        } else {
            this._health = value;
        }
        return this._health;
    }

    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack += this.attack * 0.2;
            this.defence += this.defence * 0.2;
            this.health = 100;
        } else {
            throw new Error('нельзя повысить левел умершего');
        }
        return this;
    }
    
    damage(points) {
        this.health -= points * (1 - this.defence / 100);
    }
}

class Bowman extends Character {
    constructor (name) {
        super(name, 'Bowman', 100, 1, 25, 25);
    }
}

class Swordsman extends Character {
    constructor (name) {
        super(name, 'Swordsman', 100, 1, 40, 10);
    }
}

class Magician extends Character {
    constructor (name) {
        super(name, 'Magician', 100, 1, 10, 40);
    }
}

class Daemon extends Character {
    constructor (name) {
        super(name, 'Daemon', 100, 1, 10, 40);
    }
}

class Undead extends Character {
    constructor (name) {
        super(name, 'Undead', 100, 1, 25, 25);
    }
}

class Zombie extends Character {
    constructor (name) {
        super(name, 'Zombie', 100, 1, 40, 10);
    }
}