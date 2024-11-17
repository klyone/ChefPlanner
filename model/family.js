let family = []

export function getFamily()
{
    return family;
}

export function createPerson({name, gender, age})
{
    const person = {
        id: crypto.randomUUID(),
        name,
        gender,
        age
    };

    family.push(person)

    return person;
}

export function getPerson({id})
{
    const person = family.find((p) => p.id === id);
    return person;
}

export function modifyPerson({id, name, gender, age})
{
    const person = getPerson({id});

    if (person) {
        if (name) person.name = name;
        if (gender) person.gender = gender;
        if (age) person.age = age;
    }

    return person;
}

export function deletePerson({id})
{
    const person = getPerson({id});

    if (person) {
        const newFamily = family.filter((p) => p.id !== id);
        family = newFamily;
    }

    return person;
}
