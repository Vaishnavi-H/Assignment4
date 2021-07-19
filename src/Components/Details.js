const productDetails =[
    {
        id:"12",
        productName:"watch-1",
        price:199,
        thumb:"data:image/jpeg;base64,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",
        description:"with classic features such as slim case,details in rose gold or silver.with classic features such as slim case,details in rose gold or silver.",
        count:1,
    },
    {
        id:"7",
        productName:"watch-2",
        price:199,
        thumb:"data:image/jpeg;base64,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",
        count:1,
        description:"with classic features such as slim case,details in rose gold or silver.with classic features such as slim case,details in rose gold or silver."
    },
    {
        id:"8",
        productName:"watch-3",
        price:199,
        thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPL20rR-eFz7bhzvTQue7ix9sSUNj6VAA40Q&usqp=CAU",
        description:"with classic features such as slim case,details in rose gold or silver.with classic features such as slim case,details in rose gold or silver.",
        count:1,
    },
    {
        id:"9",
        productName:"watch-4",
        price:199,
        thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZko79r6gZv-Gu0yRWhnF3_-GtmddZQNVOJg&usqp=CAU",
        description:"with classic features such as slim case,details in rose gold or silver.with classic features such as slim case,details in rose gold or silver.",
        count:1,     
    },
    {
        id:"10",
        productName:"watch-5",
        price:199,
        thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoeCju7jojDzfYmybhJBXygFy2Z3JVcJ4yuA&usqp=CAU",
        description:"with classic features such as slim case,details in rose gold or silver.with classic features such as slim case,details in rose gold or silver.",
        count:1,
    },
    {
        id:"11",
        productName:"watch-6",
        price:199,
        thumb:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNiXzCarsmHwciUAB9mtiCs78BOD0VizqqCQ&usqp=CAU",
        description:"with classic features such as slim case,details in rose gold or silver.with classic features such as slim case,details in rose gold or silver.",
        count:1,
    }
]
export default productDetails;