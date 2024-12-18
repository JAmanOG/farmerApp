import React from "react";

const LocationContext = React.createContext({
  location: null,
  updateLocation: () => {}
});

export const useLocationContext = () => {
  const context = React.useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};

export default LocationContext;