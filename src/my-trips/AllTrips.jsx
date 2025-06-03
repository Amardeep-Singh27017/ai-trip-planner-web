import { db } from '@/service/firebaseConfig';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

const AllTrips = () => {

    const navigation = useNavigation();

    const [userTrips, setUserTrips] = useState([])
    const [loading, setLoading] = useState(true); // loading state

    useEffect(() => {
        GetUserTrips();
    }, []);

    const GetUserTrips = async () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigation('/');
            return;
        }

        const q = query(collection(db, 'AITrips'), where('userEmail', '==', user?.email));

        const querySnapshot = await getDocs(q)
        const trips = [];
        querySnapshot.forEach((doc) => {
            trips.push(doc.data());
        });
        setUserTrips(trips); // Set all at once
        setLoading(false);   // After setting trips

    }




    return (
        <div className='sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
            <h2 className='font-bold text-3xl'>My Trips</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 mt-7'>

                {loading ? (
                    // Show loading skeletons
                    Array.from({ length: 6 }).map((_, index) => (
                        <div
                            key={index}
                            className='h-[195px] w-[300px] bg-slate-200 mt-5 animate-pulse rounded-xl'
                        ></div>
                    ))
                ) : userTrips.length === 0 ? (
                    // No trips
                    <div className='col-span-2 md:col-span-3 text-center text-gray-600 mt-10'>
                        You haven&apos;t created any trips yet.
                    </div>
                ) : (
                    // Show trips
                    userTrips.map((trip, index) => (
                        <UserTripCardItem key={index} trip={trip} />
                    ))
                )}

            </div>
        </div>
    )
}

export default AllTrips 