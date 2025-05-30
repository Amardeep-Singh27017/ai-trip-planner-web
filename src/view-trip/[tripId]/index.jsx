import { db } from '@/service/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';


const ViewTrip = () => {

    const { tripId } = useParams();
    const [trip, setTrip] = useState([])

    useEffect(() => {
        tripId && GetTripData();
    }, [tripId]);

    // to get the data from the database

    const GetTripData = async () => {
        const docRef = doc(db, "AITrips", tripId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setTrip(docSnap.data())
        } else {
            toast("No Trip Found!")
        }
    }

    return (
        <div className='p-10 md:px-20 lg:px-44 xl:px-65'>
            {/* Information sections  */}
            <InfoSection trip={trip} />

            {/* Recommended Hotels  */}
            <Hotels trip={trip} />

            {/* Daily Plans  */}
            <PlacesToVisit trip={trip} />

            {/* Footer  */}
            <Footer trip={trip} />
        </div>
    )
}

export default ViewTrip