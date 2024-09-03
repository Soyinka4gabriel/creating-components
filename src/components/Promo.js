import PromoHeading from "./PromoHeading";

const data = {
    heading: "80% off sale!",
    callToAction: "Everything must go!"
}

const Promo = () => {
    return ( 
        <div>
            <PromoHeading 
            heading={data.heading}
            callToAction={data.callToAction}
            />
        </div>
     );
}
 
export default Promo;