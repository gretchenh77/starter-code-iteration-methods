// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main') 
const x = document.createElement('x')

const kata1 = users.filter(x => x.isActive === true)
printKata ('1', kata1)

const kata2 = users.map( x => x.email )
printKata ('2', kata2)

const kata3 = users.some(x => x.company = 'OVATION')
printKata ('3', kata3)

const kata4 = users.find(x => x.age > 38)
printKata ('4', kata4)

const kata5 = users.filter( x => x.age > 38).find( x => x.isActive === true)
printKata ('5', kata5)

const kata6 = users.filter( x => x.company ==='ZENCO').map( x => x.balance)
printKata ('6', kata6)

const kata7 = users.filter( x =>x.tags.includes('fugiat')).map(x => x.age)
printKata ('7', kata7)


 























function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}