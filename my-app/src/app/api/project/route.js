let category = [
    {
        "front-end": [
            {
                "id": 1,
                "title": "nodeJS",
                "price": 25000
            },
            {
                "id": 2,
                "title": "NustJS",
                "price": 60000
            },
            {
                "id": 3,
                "title": "NextJS",
                "price": 1250000
            },
            {
                "id": 4,
                "title": "VanilaJS",
                "price": 25000
            },
            {
                "id": 5,
                "title": "PHP",
                "price": 60000
            },
            {
                "id": 6,
                "title": "Laravel",
                "price": 1250000
            }
        ]
    },
    {
        "back-end": [
            {
                "id": 1,
                "title": "nodeJS",
                "price": 25000
            },
            {
                "id": 2,
                "title": "NustJS",
                "price": 60000
            },
            {
                "id": 3,
                "title": "NextJS",
                "price": 1250000
            },
            {
                "id": 4,
                "title": "VanilaJS",
                "price": 25000
            },
            {
                "id": 5,
                "title": "PHP",
                "price": 60000
            },
            {
                "id": 6,
                "title": "Laravel",
                "price": 1250000
            }
        ]
    },
    {
        "hack": [
            {
                "id": 1,
                "title": "nodeJS",
                "price": 25000
            },
            {
                "id": 2,
                "title": "NustJS",
                "price": 60000
            },
            {
                "id": 3,
                "title": "NextJS",
                "price": 1250000
            },
            {
                "id": 4,
                "title": "VanilaJS",
                "price": 25000
            },
            {
                "id": 5,
                "title": "PHP",
                "price": 60000
            },
            {
                "id": 6,
                "title": "Laravel",
                "price": 1250000
            }
        ]
    }
]

export async function GET() {
    try {
        return new Response(
            JSON.stringify({ category })
        )
    } catch (error) {
    
    }
}
