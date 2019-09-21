function countHandshake(person) {
    let
        current_person = 0,
        current_target_person = 1,
        hs_limit = person,
        total_hs = 0,
        person_arr = [],
        i = 0;
    for (; i < person; i++) {
        person_arr[i] = [];
    }

    i = 0;
    while (true) {
        if (person_arr[current_person].indexOf(true) != -1) {
            ++current_person;
        } else {
            if (person_arr[current_person].indexOf(current_target_person) == -1) {
                if (current_target_person >= person) {
                    person_arr[current_person].push(true);
                    current_target_person = current_person + 1;
                } else {
                    person_arr[current_person].push(current_target_person);
                    ++i;
                    ++current_target_person;
                }
            }

            if (person_arr[person_arr.length - 1].indexOf(true) != -1) {
                break;
            }
        }
    }
    person_arr.shift();

    i = 0;
    for (; i < person_arr.length; i++) {
        total_hs += (person_arr[i].length - 1);
    }

    return total_hs;

}

console.log(countHandshake(3));
console.log(countHandshake(6));