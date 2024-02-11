const HeroSection = () => {
    return (  
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR &nbsp;FEET DESERVE THE BEST</h1>
                    
                
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU STEP INTO STYLE AND COMFORT WITH OUR EXQUISITE COLLECTION OF SHOES.
                    </p>
            </div>
            <div className="shop">
                <div className="hero-btn">
                    <button className="shopnow">Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <div className="shopping">
                    <p>Also available on</p>
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart.png" alt="" />
                    </div>
                </div>
            </div>
            
            <div className="hero-image">
                <img src="/images/shoe_image.png" alt="hero logo"  />

            </div>

        </main>
    );
}
 
export default HeroSection;