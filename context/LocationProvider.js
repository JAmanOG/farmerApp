import React, { useState } from "react";
import LocationContext from "./LocationContext";

const LocationProvider = ({ children }) => {
    const [location, setLocation] = useState(null);

    const updateLocation = (newLocation) => {
        console.log("Updating Location:", newLocation);
        setLocation(newLocation);
    }

    const contextValue = {
        location, 
        updateLocation
    };

    return (
        <LocationContext.Provider value={contextValue}>
            {children}
        </LocationContext.Provider>
    );
}

export default LocationProvider;