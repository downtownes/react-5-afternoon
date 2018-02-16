const initialState = {
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: false,
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

const UPDATELOANTYPE = 'UPDATE_LOAN_TYPE';
const UPDATEPROPERTYTYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATELOANTYPE:
            return Object.assign({}, state, { loanType: action.payload });
        case UPDATEPROPERTYTYPE:
            return Object.assign({}, state, { propertyType: action.payload });
        case UPDATE_CITY:
            return Object.assign({}, state, {updateCity: action.payload});
        case UPDATE_PROP: 
            return Object.assign({}, state, {propToBeUsedOn: action.payload})
        case UPDATE_FOUND:
            return Object.assign({}, state, {found: action.payload})
        default:
            return state;
    }
    console.log(state);
}

export function updateLoanType(loanType) {
    return {
        payload: loanType,
        type: UPDATELOANTYPE
    }
}

export function updatePropertyType(property) {
    return {
        payload: property,
        type: UPDATEPROPERTYTYPE
    }
}

export function updateCity(city) {
    return {
        payload: city,
        type: UPDATE_CITY
    }
}

export function updateProp(prop) {
    return {
        payload: prop,
        type: UPDATE_PROP
    }
}

export function updateFound(found) {
    return {
        payload: found,
        type: UPDATE_FOUND
    }
}


export default reducer;