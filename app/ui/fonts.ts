import { Henny_Penny } from 'next/font/google';
import { Cormorant_Garamond } from 'next/font/google';
 
export const hennyPenny = Henny_Penny({ 
    subsets: ["latin"],
    weight: ["400"]
});

export const cormorant = Cormorant_Garamond({ 
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"]
});
 