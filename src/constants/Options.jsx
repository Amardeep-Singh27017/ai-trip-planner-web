export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'✈️',
        people: '1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon: '🥂',
        people: '2 people'
   },
   {
    id:3,
    title:'Family',
    desc:'A group of fun loving adv',
    icon: '🏡',
    people: '2 to 5 people'
},
{
    id:4,
    title:'Friends',
    desc:'A bunch of thrill-seeks',
    icon: '🏕️',
    people: '5 people'
},
]

export const SelectBudgetOptions= [
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon: '💵',
    },
    
    {
        
        id:2,
        title:'Moderate',
        desc:'Keep cost on the average side',
        icon: '💰',
    },

    {
        
        id:3,
        title:'Luxury',
        desc:'Dont worry about cost',
        icon: '💸',
    },
]

export const AI_PROMPT = `
Generate a travel plan for the following details:

- Location: {location}
- Duration: {totalDays} days
- Number of travelers: {traveler}
- Budget: {budget}

Output format: JSON

Your response must include:

1. "HotelOptions" (Array)
   - Each hotel should include:
     - HotelName
     - Hotel address
     - Price (range)
     - Actual hotel image URL
     - Geo coordinates
     - Rating
     - Description
   - Recommend between 4 and 8 hotels.

2. "Itinerary" (Array of days)
   - Each day must contain a "Plan" array.
   - For each place in the Plan:
     - PlaceName
     - Place details
     - Place image URL
     - Geo coordinates
     - Ticket pricing
     - Rating
     - Time to travel to the location
     - Best time to visit

Ensure all keys are in camelCase and output only valid JSON.
`;
