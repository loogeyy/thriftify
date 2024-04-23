const storesData =
  [
    {
      "name": "Pavement",
      "distance": 1.1,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 0.9
          },
          {
            "value": "Brandy Melville",
            "scale": 1.5
          },
          {
            "value": "Aritzia",
            "scale": 1.8
          },
          {
            "value": "Nike",
            "scale": 1.1
          },
          {
            "value": "Urban Outfitters",
            "scale": 1.2
          },
          {
            "value": "Adidas",
            "scale": 0.7
          },
          {
            "value": "Levi's",
            "scale": 1.2
          },
          {
            "value": "Hollister",
            "scale": 1.1
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.3
          },
          {
            "value": "Average",
            "scale": 0.8
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 2.0,
            "price-high": 10.0
          },
          {
            "item": "Pants",
            "price-low": 2.0,
            "price-high": 20.0
          },
          {
            "item": "Shoes",
            "price-low": 5.0,
            "price-high": 40.0
          },
          {
            "item": "Dress",
            "price-low": 10.0,
            "price-high": 100.0
          },
          {
            "item": "Outerwear",
            "price-low": 10.0,
            "price-high": 80.0
          },
          {
            "item": "Skirt",
            "price-low": 5.0,
            "price-high": 20.0
          },
          {
            "item": "Shorts",
            "price-low": 1.0,
            "price-high": 10.0
          }
        ]
    },
    {
      "name": "Buffalo Exchange",
      "distance": 1.0,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 0.75
          },
          {
            "value": "Zara",
            "scale": 1.25
          },
          {
            "value": "Urban Outfitters",
            "scale": 1.5
          },
          {
            "value": "Aritzia",
            "scale": 1.5
          },
          {
            "value": "New Balance",
            "scale": 1.0
          },
          {
            "value": "Hollister",
            "scale": 0.8
          },
          {
            "value": "Anthropologie",
            "scale": 1.25
          },
          {
            "value": "Chanel",
            "scale": 1.9
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.1
          },
          {
            "value": "Average",
            "scale": 0.5
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 1.0,
            "price-high": 20.0
          },
          {
            "item": "Pants",
            "price-low": 5.0,
            "price-high": 30.0
          },
          {
            "item": "Shoes",
            "price-low": 10.0,
            "price-high": 45.0
          },
          {
            "item": "Dress",
            "price-low": 10.0,
            "price-high": 50.0
          },
          {
            "item": "Outerwear",
            "price-low": 7.0,
            "price-high": 70.0
          },
          {
            "item": "Skirt",
            "price-low": 2.0,
            "price-high": 50.0
          },
          {
            "item": "Shorts",
            "price-low": 50.0,
            "price-high": 10.0
          }
        ]
    },
    {
      "name": "Plato's Closet",
      "distance": 5.4,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Levi's",
            "scale": 0.8
          },
          {
            "value": "Nike",
            "scale": 1.4
          },
          {
            "value": "Urban Outfitters",
            "scale": 1.25
          },
          {
            "value": "Adidas",
            "scale": 0.7
          },
          {
            "value": "Free People",
            "scale": 1.1
          },
          {
            "value": "Steve Madden",
            "scale": 1.4
          },
          {
            "value": "Uniqlo",
            "scale": 1.1
          },
          {
            "value": "Puma",
            "scale": 0.75
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.5
          },
          {
            "value": "Average",
            "scale": 0.7
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 2.0,
            "price-high": 7.0
          },
          {
            "item": "Pants",
            "price-low": 2.0,
            "price-high": 20.0
          },
          {
            "item": "Shoes",
            "price-low": 2.0,
            "price-high": 20.0
          },
          {
            "item": "Dress",
            "price-low": 5.0,
            "price-high": 20.0
          },
          {
            "item": "Outerwear",
            "price-low": 5.0,
            "price-high": 50.0
          },
          {
            "item": "Skirt",
            "price-low": 3.0,
            "price-high": 10.0
          },
          {
            "item": "Shorts",
            "price-low": 1.0,
            "price-high": 20.0
          }
        ]
    },
    {
      "name": "Uptown Cheapskate",
      "distance": 3.4,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 0.2
          },
          {
            "value": "Zara",
            "scale": 1.1
          },
          {
            "value": "Brandy Melville",
            "scale": 1.3
          },
          {
            "value": "Free People",
            "scale": 1.23
          },
          {
            "value": "Chanel",
            "scale": 2.1
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.3
          },
          {
            "value": "Average",
            "scale": 0.6
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 2.0,
            "price-high": 10.0
          },
          {
            "item": "Pants",
            "price-low": 7.0,
            "price-high": 30.0
          },
          {
            "item": "Shoes",
            "price-low": 7.0,
            "price-high": 50.0
          },
          {
            "item": "Dress",
            "price-low": 3.0,
            "price-high": 30.0
          },
          {
            "item": "Outerwear",
            "price-low": 5.0,
            "price-high": 200.0
          },
          {
            "item": "Skirt",
            "price-low": 1.0,
            "price-high": 50.0
          },
          {
            "item": "Shorts",
            "price-low": 10.0,
            "price-high": 20.0
          }
        ]
    },
    {
      "name": "Texas Thrift",
      "distance": 4.0,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 0.9
          },
          {
            "value": "Zara",
            "scale": 1.1
          },
          ,
          {
            "value": "Brandy Melville",
            "scale": 0.9
          },
          {
            "value": "Aritzia",
            "scale": 1.4
          },
          {
            "value": "Adidas",
            "scale": 0.55
          },
          {
            "value": "Free People",
            "scale": 1.21
          },
          {
            "value": "Anthropologie",
            "scale": 1.33
          },
          {
            "value": "Steve Madden",
            "scale": 1.5
          },
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.6
          },
          {
            "value": "Average",
            "scale": 0.8
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 2.5,
            "price-high": 10.5
          },
          {
            "item": "Pants",
            "price-low": 2.99,
            "price-high": 20.45
          },
          {
            "item": "Shoes",
            "price-low": 5.56,
            "price-high": 40.37
          },
          {
            "item": "Dress",
            "price-low": 10.23,
            "price-high": 100.99
          },
          {
            "item": "Outerwear",
            "price-low": 10.0,
            "price-high": 100.0
          },
          {
            "item": "Skirt",
            "price-low": 5.0,
            "price-high": 50.0
          },
          {
            "item": "Shorts",
            "price-low": 2.0,
            "price-high": 10.0
          }
        ]
    },
    {
      "name": "Thrift 512",
      "distance": 5.12,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Nike",
            "scale": 1.1
          },
          {
            "value": "Chanel",
            "scale": 2.0
          },
          {
            "value": "Adidas",
            "scale": 0.5
          },
          {
            "value": "Steve Madden",
            "scale": 1.3
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.2
          },
          {
            "value": "Average",
            "scale": 0.5
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 5.0,
            "price-high": 6.0
          },
          {
            "item": "Pants",
            "price-low": 1.05,
            "price-high": 10.5
          },
          {
            "item": "Shoes",
            "price-low": 2.22,
            "price-high": 44.44
          },
          {
            "item": "Dress",
            "price-low": 30.05,
            "price-high": 150.05
          },
          {
            "item": "Outerwear",
            "price-low": 10.0,
            "price-high": 90.0
          },
          {
            "item": "Skirt",
            "price-low": 10.0,
            "price-high": 63.0
          },
          {
            "item": "Shorts",
            "price-low": 10.0,
            "price-high": 88.0
          }
        ]
    },
    {
      "name": "Average Thrift Store",
      "distance": 4.0,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Converse",
            "scale": 0.99
          },
          {
            "value": "Puma",
            "scale": 1.01
          },
          {
            "value": "Hollister",
            "scale": 0.89
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.98
          },
          {
            "value": "Average",
            "scale": 0.99
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 0.5,
            "price-high": 10.5
          },
          {
            "item": "Pants",
            "price-low": 1.5,
            "price-high": 20.5
          },
          {
            "item": "Shoes",
            "price-low": 5.5,
            "price-high": 40.5
          },
          {
            "item": "Dress",
            "price-low": 10.5,
            "price-high": 50.5
          },
          {
            "item": "Outerwear",
            "price-low": 10.0,
            "price-high": 20.0
          },
          {
            "item": "Skirt",
            "price-low": 5.0,
            "price-high": 30.0
          },
          {
            "item": "Shorts",
            "price-low": 2.0,
            "price-high": 22.0
          }
        ]
    },
    {
      "name": "Longhorn Thrift",
      "distance": 6.1,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Levi's",
            "scale": 0.9
          },
          {
            "value": "Converse",
            "scale": 1.5
          },
          {
            "value": "Chanel",
            "scale": 2.3
          },
          {
            "value": "Aritzia",
            "scale": 1.7
          },
          {
            "value": "Lululemon",
            "scale": 1.8
          },
          {
            "value": "Pacsun",
            "scale": 1.1
          },
        ],


      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.3
          },
          {
            "value": "Average",
            "scale": 0.8
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 2.0,
            "price-high": 10.0
          },
          {
            "item": "Pants",
            "price-low": 2.0,
            "price-high": 20.0
          },
          {
            "item": "Shoes",
            "price-low": 5.0,
            "price-high": 40.0
          },
          {
            "item": "Dress",
            "price-low": 10.0,
            "price-high": 100.0
          },
          {
            "item": "Outerwear",
            "price-low": 10.0,
            "price-high": 50.0
          },
          {
            "item": "Skirt",
            "price-low": 3.0,
            "price-high": 30.0
          },
          {
            "item": "Shorts",
            "price-low": 2.0,
            "price-high": 20.0
          }
        ]
    },
    {
      "name": "Nifty Thrifts",
      "distance": 10.5,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 1.0
          },
          {
            "value": "Zara",
            "scale": 1.5
          },
          {
            "value": "Converse",
            "scale": 1.3
          },
          {
            "value": "Lululemon",
            "scale": 1.3
          },
          {
            "value": "Pacsun",
            "scale": 1.1
          },
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.9
          },
          {
            "value": "Average",
            "scale": 0.95
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 5.0,
            "price-high": 20.0
          },
          {
            "item": "Pants",
            "price-low": 5.0,
            "price-high": 30.0
          },
          {
            "item": "Shoes",
            "price-low": 15.0,
            "price-high": 50.0
          },
          {
            "item": "Dress",
            "price-low": 10.0,
            "price-high": 50.0
          },
          {
            "item": "Outerwear",
            "price-low": 5.0,
            "price-high": 20.0
          },
          {
            "item": "Skirt",
            "price-low": 2.0,
            "price-high": 55.0
          },
          {
            "item": "Shorts",
            "price-low": 3.0,
            "price-high": 33.0
          }
        ]
    },
    {
      "name": "Goodwill",
      "distance": 1.5,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 1.0
          },
          {
            "value": "Zara",
            "scale": 1.0
          },
          {
            "value": "Chanel",
            "scale": 1.5
          },
          {
            "value": "Hollister",
            "scale": 0.9
          }


        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 1.0
          },
          {
            "value": "Average",
            "scale": 1.0
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Pants",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Shoes",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Dress",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Outerwear",
            "price-low": 10.0,
            "price-high": 100.0
          },
          {
            "item": "Skirt",
            "price-low": 10.0,
            "price-high": 50.0
          },
          {
            "item": "Shorts",
            "price-low": 5.0,
            "price-high": 10.0
          }
        ]
    },
    {
      "name": "Treasure City Thrifts",
      "distance": 2.5,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Old Navy",
            "scale": 0.8
          },
          {
            "value": "Zara",
            "scale": 1.0
          },
          {
            "value": "Chanel",
            "scale": 1.5
          },
          {
            "value": "Lululemon",
            "scale": 1.3
          },
          {
            "value": "Pacsun",
            "scale": 0.95
          },
          {
            "value": "Uniqlo",
            "scale": 1.01
          },
          {
            "value": "Aritzia",
            "scale": 1.8
          },
          {
            "value": "Brandy Melville",
            "scale": 1.4
          },
          {
            "value": "Hollister",
            "scale": 1.1
          },
          {
            "value": "Lululemon",
            "scale": 1.8
          }
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 1.0
          },
          {
            "value": "Average",
            "scale": 1.0
          },
          {
            "value": "Excellent",
            "scale": 1.0
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Pants",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Shoes",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Dress",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Outerwear",
            "price-low": 5.0,
            "price-high": 50.0
          },
          {
            "item": "Skirt",
            "price-low": 3.0,
            "price-high": 40.0
          },
          {
            "item": "Shorts",
            "price-low": 4.0,
            "price-high": 40.0
          }
        ]
    },
    {
      "name": "Sporty Thrifts",
      "distance": 2.1,
      "brands":
        [
          {
            "value": "",
            "scale": 1.0
          },
          {
            "value": "Nike",
            "scale": 1.1
          },
          {
            "value": "Adidas",
            "scale": 1.3
          },
          {
            "value": "New Balance",
            "scale": 1.5
          },
          {
            "value": "Lululemon",
            "scale": 1.8
          },
          {
            "value": "Puma",
            "scale": 1.2
          },
        ],
      "condition":
        [
          {
            "value": "Poor",
            "scale": 0.4
          },
          {
            "value": "Average",
            "scale": 0.9
          },
          {
            "value": "Excellent",
            "scale": 1.1
          }
        ],
      "offers":
        [
          {
            "item": "Shirt",
            "price-low": 5.0,
            "price-high": 15.0
          },
          {
            "item": "Pants",
            "price-low": 10.0,
            "price-high": 30.0
          },
          {
            "item": "Shoes",
            "price-low": 10.0,
            "price-high": 40.0
          },
          {
            "item": "Dress",
            "price-low": 1.0,
            "price-high": 10.0
          },
          {
            "item": "Outerwear",
            "price-low": 5.0,
            "price-high": 30.0
          },
          {
            "item": "Skirt",
            "price-low": 2.0,
            "price-high": 10.0
          },
          {
            "item": "Shorts",
            "price-low": 5.0,
            "price-high": 20.0
          }
        ]
    },


  ];


export default storesData;
