interface ProductType {
    img: string;
    price: {
      last: number;
      old: number;
    };
    name: string;
    title: string; // added
    shopBag: string; // added
    heart: string; // added
    cycle: string; // corrected typo and made it an array or null
    
}