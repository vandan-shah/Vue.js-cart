app.component('productDetails', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },

    template:
        /*html*/
    `   <div>
    <ul>
    <li v-for="detail in details">{{ detail }}</li>
</ul>
        </div>
    `
})