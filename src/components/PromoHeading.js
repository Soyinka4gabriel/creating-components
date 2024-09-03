const PromoHeading = (props) => {
    return ( 
        <section>
            <h1>{props.heading}</h1>
            <h2>{props.callToAction}</h2>
        </section>
     );
}
 
export default PromoHeading;