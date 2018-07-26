const state = {
    menuItems: {
        1: {
            'name': 'Sicilian Meatlovers',
            'description': "Als je een eindbaas bent, verdien je het beste di tutti. Daarom is ‘ie terug van weggeweest; de Sicilian Meatlovers! Een pizza met pepperoni, ham, goudeerlijke chorizo, uber-rijke tomatensaus, romige mozzarella, ,frispittige lente-uitjes en knoflookolie op de rand.",
            'options': [{
                'size': 9,
                'price': 7.95
            }, {
                'size': 12,
                'price': 12.95
            }]
        },
        2: {
            'name': 'Sea Shepherd Vegan Shoarma Pizza',
            'description': "De shoarma is heerlijk veganistisch. En verder zit er op deze pizza: tomatensaus, rode ui, romige vegan knoflook swirl en sublieme vegan kaas maken hem verantwoord en goddelijk af. Van elke pizza gaat één euro naar de stoere reddingsacties van Sea Shepherd.",
            'options': [{
                'size': 9,
                'price': 7.95
            }, {
                'size': 12,
                'price': 12.95
            }]
        },
        3: {
            'name': 'Margherita pizza',
            'description': "Pizza met tomatensaus en mozzarella. Met boterzachte knoflookolie op de rand van de pizza. Tip! Ook lekker met oregano.",
            'options': [{
                'size': 9,
                'price': 7.95
            }, {
                'size': 12,
                'price': 12.95
            }]
        },
    },
}

const getters = {
    getMenuItems : state => state.menuItems
}

const mutations = {}

const actions = {}

export default {
    state, mutations, getters, actions
}