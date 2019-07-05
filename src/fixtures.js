function loadAllItems() {
    return [
        {
            barcode: 'ITEM000001',
            name: '方便面',
            unit: '袋',
            price: 4.50,
            img: './imgs/instant-noodles.jpeg'
        },
        {
            barcode: 'ITEM000002',
            name: '羽毛球',
            unit: '个',
            price: 1.00,
            img: './imgs/badminton.png'            
        },
        {
            barcode: 'ITEM000003',
            name: '荔枝',
            unit: '斤',
            price: 15.00,
            img: './imgs/litchi.jpg'
        },
        {
            barcode: 'ITEM000004',
            name: '苹果',
            unit: '斤',
            price: 5.50,
            img: './imgs/apple.jpeg'
        },
        {
            barcode: 'ITEM000005',
            name: '电池',
            unit: '个',
            price: 2.00,
            img: './imgs/battery.jpeg'
        },
        {
            barcode: 'ITEM000006',
            name: '可口可乐',
            unit: '瓶',
            price: 3.00,
            img: './imgs/coco-cola.jpg'
        }
    ];
}

function loadPromotions() {
    return [
        {
            type: 'BUY_FOUR_GET_ONE_FREE',
            barcodes: [
                'ITEM000002',
                'ITEM000004',
                'ITEM000006'
            ]
        }
    ];
}
