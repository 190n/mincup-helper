export interface Competition {
    date: Date;
    minerals: [string, string];
}

// voting at 23:00 GMT (approx)
function d(monthDay: string): Date {
    return new Date(`2021-${monthDay}T23:00:00-00:00`);
}

const competitions: Competition[] = [
    { date: d('09-12'), minerals: ['Chalcanthite', 'Torbernite'] },
    { date: d('09-13'), minerals: ['Saponite', 'Zircon'] },
    { date: d('09-14'), minerals: ['Palygorskite', 'Kaolinite'] },
    { date: d('09-15'), minerals: ['Ice', 'Olivine'] },
    { date: d('09-16'), minerals: ['Rhodochrosite', 'Malachite'] },
    { date: d('09-17'), minerals: ['Sodalite', 'Quetzalcoatlite'] },
    { date: d('09-18'), minerals: ['Quartz', 'Kyanite'] },
    { date: d('09-19'), minerals: ['Corundum', 'Pyroxene'] },
    { date: d('09-20'), minerals: ['Tourmaline', 'Opal'] },
    { date: d('09-21'), minerals: ['Serpentine', 'Scheelite'] },
];

export default competitions;

export function getCurrentCompetition(date: Date): Competition {
    let foundComp = competitions[0];

    for (const c of competitions) {
        if (c.date < date) {
            foundComp = c;
        } else {
            return foundComp;
        }
    }

    return foundComp;
}
