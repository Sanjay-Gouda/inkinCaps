import { createContext, useState } from "react";

export const offerContext = createContext();

const OfferContextWrapper = ({ children }) => {
  const [createdOffers, setCreatedOffers] = useState([]);

  //   const handleCreateOffer = (payload) => {
  //     setCreatedOffers([...createdOffers, payload]);
  //   };

  return (
    <>
      <offerContext.Provider value={{ createdOffers, setCreatedOffers }}>
        {children}
      </offerContext.Provider>
    </>
  );
};

export default OfferContextWrapper;
