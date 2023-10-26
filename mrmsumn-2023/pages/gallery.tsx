import { Gallery, Navbar } from "@/components"

import { sources } from "@/data/sampleImageSource";

const gallery = () => {
    
    return (
        <>
        <Navbar/>
        <Gallery source={sources}/>
        </>
    );
};

export default gallery;