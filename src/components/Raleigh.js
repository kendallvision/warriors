import Location from './Location'

class Raleigh extends Location { }

Raleigh.defaultProps = {
    locationTown: "Raleigh",
    headInstructor: "Joel Geniesse, soke",
    mapLink: "https://www.google.com/maps/place/Brooks+Avenue+Church+of+Christ/@35.7971213,-78.6721486,15z/data=!4m2!3m1!1s0x0:0xd89c8965f9fe4610?sa=X&ved=0ahUKEwjVoJ7wzq_aAhXDy4MKHW5KAdkQ_BIIgAEwDQ",
    locationName: "Brooks Ave Church of Christ",
    address1: "700 Brooks Ave",
    cityStateZip: "Raleigh, NC 27607",
    classTimes:"Tuesdays at 6pm",
    registrationStatus: "Email us to be added to our new student waiting list.",
    registrationPrice: "Registration $50 (includes 1st month & uniform)",
    registrationMonthly: "Monthly dues $30 for first student",
    registrationOtherFamily: "$10 for each additional family member",
    infoEmail: "mailto:info.raleigh@warriors-for-christ.com",
    calendarLink: ''
}

export default Raleigh;
