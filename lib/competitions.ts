export type Competition = [Date, string, string];

// voting at 23:00 GMT (approx)
function d(monthDay: string): Date {
    return new Date(`2021-${monthDay}T23:00:00-00:00`);
}

const competitions: Competition[] = [
    [d('09-12'), 'Chalcanthite', 'Torbernite'],
    [d('09-13'), 'Saponite', 'Zircon'],
    [d('09-14'), 'Palygorskite', 'Kaolinite'],
    [d('09-15'), 'Ice', 'Olivine'],
    [d('09-16'), 'Rhodochrosite', 'Malachite'],
    [d('09-17'), 'Sodalite', 'Quetzalcoatlite'],
    [d('09-18'), 'Quartz', 'Kyanite'],
    [d('09-19'), 'Corundum', 'Pyroxene'],
    [d('09-20'), 'Tourmaline', 'Opal'],
    [d('09-21'), 'Serpentine', 'Scheelite'],
];

export default competitions;
