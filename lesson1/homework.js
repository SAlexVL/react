const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

let employersNames = employers.filter((name) => {
    return (name.length > 0 && name.length != '');
});

employersNames = employersNames.map((item) => item.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;

function calcCash(own = 0){
    // let everyCash = Array.from(arguments);
    let total = own;
    total = cash.reduce((cash, b) => { return cash + b; }, 0);
    return total;
}

let money = calcCash(null, cash);

let makeBusiness = ({
    owner, 
    director = 'Victor', 
    cash, 
    emp}) => {
        let sumSponsors = eu.concat(rus, `unexpected sponsor`);
        console.log(`We have a business. Owner: ${owner}, director:  ${director}. Our budget:  ${cash}. And our employers: ${emp}`);
        console.log('And we have a sponsors: ');
        console.log.apply(null, sumSponsors);
        console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
};
makeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
});