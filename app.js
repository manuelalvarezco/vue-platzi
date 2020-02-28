new Vue({
    el: '#app',
    data() {
        return {
            name: 'Bitcoin',
            symbol: 'BTC',
            img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
            changePercent: -10,
            price: 8400,
            value: 0,
            numero: 0,
            color: 'F4F4F4',
            pricesWithDays: [
                { day: 'Lunes', value: 8400 },
                { day: 'Martes', value: 7900 },
                { day: 'Miercoles', value: 8200 },
                { day: 'Jueves', value: 9000 },
                { day: 'Viernes', value: 9400 },
                { day: 'Sabado', value: 10000 },
                { day: 'Domingo', value: 10200 },
            ],
            showPrices: false
        }
    },
    computed: {
        title() {
            return `${this.name} + ${this.symbol}`
        },
        converterGauss() {
            if (!this.numero) {
                return 0
            }

            return (this.numero * (parseInt(this.numero) + 1)) / 2;
        },
        converterValue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.price;
        }
    },

    watch: {
        showPrices(newVal, oldVal) {
            console.log(newVal, oldVal);
        }
    },
    methods: {
        toogleShowPrices() {
            this.showPrices = !this.showPrices

            this.color = this.color.split('')
                .reverse().join('')
        }
    },

})