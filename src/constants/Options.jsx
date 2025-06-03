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

// export const AI_PROMPT='Generate Travel Plan for Location : {location} for {totalDays} Days for {traveler} traveler with a {budget} budget(Itinerary section in the output must be an array of days plans and all the individual day details in the Plan array inside Itinerary) , give me HotelOptions list with the HotelName(at least 4 hotels must recommended or you can recommended at least 4 or less than 9), Hotel address, Price(in range),  hotel image url(actual images url), geo coordinates,rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating,Time travel each of the location for 3 days with each day plan with best time to visit in JSON format.'  
export const AI_PROMPT = `
You are a travel planner AI.

Generate a detailed travel plan in **JSON format** for the following inputs:

- **Location**: {location}
- **Number of Days**: {totalDays}
- **Traveler Type**: {traveler}
- **Budget**: {budget}

Your response must include:

1. **Itinerary** (array of day-wise plans)
   - Each day must have a list of places to visit (called "Plan").
   - Each item in "Plan" should include:
     - placeName
     - placeDetails
     - placeImageUrl (actual image URLs)
     - geoCoordinates (latitude and longitude)
     - ticketPricing
     - rating
     - bestTimeToVisit
     - timeToSpend

2. **HotelOptions** (array of 4 to 9 hotels)
   - Each hotel object must include:
     - hotelName
     - address
     - priceRange
     - imageUrl (real hotel image URL)
     - geoCoordinates (latitude and longitude)
     - rating
     - description

Output must be a **valid JSON object** with two keys: "itinerary" and "hotelOptions".

Example structure:
{
  "itinerary": [ ... ],
  "hotelOptions": [ ... ]
}
Only return the JSON, nothing else.
`;
