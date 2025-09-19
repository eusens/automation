const sampleData = {
  products: [
    {
      "name": "6ES7 155-6AU01-0BN0",
      "slug": "6ES7155-6AU01-0BN0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP IM 155-6 PN ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9485.webp"
      ],
      "price": 142.1,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 17,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP IM 155-6 PN ST Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 215-1AG40-0XB0",
      "slug": "6ES7215-1AG40-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 CPU 1215C DC/DC/DC",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9446.webp"
      ],
      "price": 357.16,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 25,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 CPU 1215C DC/DC/DC Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 223-1BL32-0XB0",
      "slug": "6ES7223-1BL32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1223 16 DI DC 24V Sink/Source 16 DO Transistor 0.5A",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9450.webp"
      ],
      "price": 172.04,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 21,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1223 16 DI DC 24V Sink/Source 16 DO Transistor 0.5A Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 231-4HD32-0XB0",
      "slug": "6ES7231-4HD32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1231 4 AI +/-10V, +/-5V, +/-2.5V or 0-20mA/4-20mA 12BIT",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9486.webp"
      ],
      "price": 140.47,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 27,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1231 4 AI +/-10V, +/-5V, +/-2.5V or 0-20mA/4-20mA 12BIT Sealed <a href=\"https://eusens.com/crouzet-mas5/\" target=\"_blank\">crouzet mas5</a>\n\n\n<a href=\"https://eusens.com/6sl3040-1ma01-0aa0/\" target=\"_blank\">6sl3040 1ma01 0aa0</a>",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 231-4HF32-0XB0",
      "slug": "6ES7231-4HF32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1231 8 AI +/-10V, +/-5V, +/-2.5V or 0-20mA/4-20mA 12BIT",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9445.webp"
      ],
      "price": 228.12,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 39,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1231 8 AI +/-10V, +/-5V, +/-2.5V or 0-20mA/4-20mA 12BIT Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 321-1BL00-0AA0",
      "slug": "6ES7321-1BL00-0AA0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 SM 321 32 DI DC 24V",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9465.webp"
      ],
      "price": 269.99,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 12,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 SM 321 32 DI DC 24V Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 123-2DB03-0AX0",
      "slug": "6AV2123-2DB03-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI KTP400 Basic",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9449.webp"
      ],
      "price": 204.82,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 15,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI KTP400 Basic Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 124-0JC01-0AX0",
      "slug": "6AV2124-0JC01-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI TP900 Comfort",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9448.webp"
      ],
      "price": 1204.86,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 24,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI TP900 Comfort Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 132-6BF01-0BA0",
      "slug": "6ES7132-6BF01-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP DQ 8x 24VDC/0.5A ST",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9464.webp"
      ],
      "price": 37.02,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 707,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP DQ 8x 24VDC/0.5A ST Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 136-6DB00-0CA0",
      "slug": "6ES7136-6DB00-0CA0",
      "category": "Siemens",
      "description": "SIMATIC DP F-DQ 4x24VDC/2A PM HF",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9487.webp"
      ],
      "price": 128.87,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 130,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP F-DQ 4x24VDC/2A PM HF Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 137-6AA01-0BA0",
      "slug": "6ES7137-6AA01-0BA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP CM PTP RS232 RS485/422",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9468.webp"
      ],
      "price": 177.49,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 16,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP CM PTP RS232 RS485/422 Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 193-6BP20-0DA0",
      "slug": "6ES7193-6BP20-0DA0",
      "category": "Siemens",
      "description": "SIMATIC ET 200SP BU15-P16+A10+2D",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9491.webp"
      ],
      "price": 17.97,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 1065,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC ET 200SP BU15-P16+A10+2D Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 214-1HG40-0XB0",
      "slug": "6ES7214-1HG40-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 CPU 1214C DC/DC/Relay",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9422.webp"
      ],
      "price": 251.34,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 25,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 CPU 1214C DC/DC/Relay Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 221-1BH32-0XB0",
      "slug": "6ES7221-1BH32-0XB0",
      "category": "Siemens",
      "description": "SIMATIC S7-1200 SM 1221 16 DI DC 24V",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9442.webp"
      ],
      "price": 108.89,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 24,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-1200 SM 1221 16 DI DC 24V Sealed <a href=\"https://eusens.com/crouzet-mas5/\" target=\"_blank\">crouzet mas5</a>\n\n\n<a href=\"https://eusens.com/6sl3040-1ma01-0aa0/\" target=\"_blank\">6sl3040 1ma01 0aa0</a>",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 322-1BL00-0AA0",
      "slug": "6ES7322-1BL00-0AA0",
      "category": "Siemens",
      "description": "SIMATIC S7-300 SM 322 32 DO DC 24V 0.5A",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9441.webp"
      ],
      "price": 342.9,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 48,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC S7-300 SM 322 32 DO DC 24V 0.5A Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6GK5 005-0BA00-1AB2",
      "slug": "6GK5005-0BA00-1AB2",
      "category": "Siemens",
      "description": "SCALANCE XB005",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9483.webp"
      ],
      "price": 68.06,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 4,
      "isFeatured": true,
      "banner": null,
      "details": "SCALANCE XB005 Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 153-1AA03-0XB0",
      "slug": "6ES7153-1AA03-0XB0",
      "category": "Siemens",
      "description": "SIMATIC DP IM 153-1",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9451.webp"
      ],
      "price": 315.56,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 2,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP IM 153-1 Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6ES7 158-3AD10-0XA0",
      "slug": "6ES7158-3AD10-0XA0",
      "category": "Siemens",
      "description": "SIMATIC DP PN/PN Coupler",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9447.webp"
      ],
      "price": 327.21,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 7,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC DP PN/PN Coupler Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 123-2JB03-0AX0",
      "slug": "6AV2123-2JB03-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI KTP900 Basic",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9484.webp"
      ],
      "price": 653.17,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 1,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI KTP900 Basic Sealed",
      "conditions": "Sealed"
    },
    {
      "name": "6AV2 123-2MB03-0AX0",
      "slug": "6AV2123-2MB03-0AX0",
      "category": "Siemens",
      "description": "SIMATIC HMI KTP1200 Basic",
      "images": [
        "https://sanityimages.s3.us-west-2.amazonaws.com/IMG_9467.webp"
      ],
      "price": 932.47,
      "brand": "Siemens",
      "rating": 4.5,
      "numReviews": 10,
      "stock": 4,
      "isFeatured": true,
      "banner": null,
      "details": "SIMATIC HMI KTP1200 Basic Sealed",
      "conditions": "Sealed"
    }
  ]
};

export default sampleData;
