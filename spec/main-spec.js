describe('pos', function () {
  var allItems;
  var promotions;
  var inputs;
  var outputs;

  var itemList = [
    {name: "羽毛球", unit: "个", price: 1, barcode: "ITEM000002", img: "./imgs/badminton.png"},
    {name: "羽毛球", unit: "个", price: 1, barcode: "ITEM000002", img: "./imgs/badminton.png"},
    {name: "羽毛球", unit: "个", price: 1, barcode: "ITEM000002", img: "./imgs/badminton.png"},
    {name: "羽毛球", unit: "个", price: 1, barcode: "ITEM000002", img: "./imgs/badminton.png"},
    {name: "羽毛球", unit: "个", price: 1, barcode: "ITEM000002", img: "./imgs/badminton.png"},
    {name: "苹果", unit: "斤", price: 5.5, barcode: "ITEM000004", img: "./imgs/apple.jpeg"},
    {name: "可口可乐", unit: "瓶", price: 3, barcode: "ITEM000006", img: "./imgs/coco-cola.jpg"},
    {name: "可口可乐", unit: "瓶", price: 3, barcode: "ITEM000006", img: "./imgs/coco-cola.jpg"},
    {name: "可口可乐", unit: "瓶", price: 3, barcode: "ITEM000006", img: "./imgs/coco-cola.jpg"}
  ];

  var cartList = [
    {barcode: "ITEM000002", count: 5, img: "./imgs/badminton.png", name: "羽毛球", price: 1, unit: "个"},
    {barcode: "ITEM000004", count: 2, img: "./imgs/apple.jpeg", name: "苹果", price: 5.5, unit: "斤"},
    {barcode: "ITEM000006", count: 3, img: "./imgs/coco-cola.jpg", name: "可口可乐", price: 3, unit: "瓶"}
  ];

  var discountInfo ={
    cartItems: [
      {
        count: 5,
        img: "./imgs/badminton.png",
        name: "羽毛球",
        price: 1,
        totalPrice: 4,
        unit: "个"
      },
      {
        count: 2,
        img: "./imgs/apple.jpeg",
        name: "苹果",
        price: 5.5,
        totalPrice: 11,
        unit: "斤"
      },
      {
        count: 3,
        img: "./imgs/coco-cola.jpg",
        name: "可口可乐",
        price: 3,
        totalPrice: 6,
        unit: "瓶"
      }
    ],
    discountProductList: [
      {
        count: 1,
        name: "羽毛球",
        price: 1,
        unit: "个"
      },
      {
        count: 1,
        name: "可口可乐",
        price: 3,
        unit: "瓶"
      }
    ]
  };

  var summary = {
    discountPrice: 4,
    totalPrice: 21
  }

  beforeEach(function () {
    allItems = loadAllItems();
    promotions = loadPromotions();
    inputs = [
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000001',
        'ITEM000003-2',
        'ITEM000005',
        'ITEM000005',
        'ITEM000005',
        'ITEM000006-8'
    ];
  });

  it('createItemList', function () {
    expect(createItemList(allItems, inputs)).toEqual(itemList)
  });

  it('createCartList', function () {
    expect(createCartList(itemList, inputs)).toEqual(cartList)
  });

  it('caculateDiscount', function () {
    expect(caculateDiscount(cartList, promotions)).toEqual(discountInfo)
  });

  it('should return correct data structure', function () {
    expect(createSummary(discountInfo.cartItems, discountInfo.discountProductList)).toEqual(summary)
  });
});
