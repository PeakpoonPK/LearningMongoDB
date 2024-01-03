const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNENTION OPEN!!!')
    })
    .catch(err => {
        console.log("ON ON ERROR!!!")
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 20
    },
    price: {
        type: Number,
        require: true,
        min: [0, 'Price is positive']
    },
    onsale: {
        type: Boolean,
        default: false
    },
    categories: {
        type: [String],
        default: ['cycling']
    },
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    sixe: {
        type: String,
        enum: [s, m, l]
    }
})

// productSchema.methods.greet = function () {
//     console.log("HELLO!!! HI! HOWDY!!!")
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save()
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema)


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}
Product.fireSale().then(res => console.log(res))



// const bike = new Product({ name: "Tire Pump", price: 19.50, categories: ['Cycling', 'Safety', 123] })

// bike.save()
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH ON ERROR")
//         console.log((err))
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 19.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED")
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("OH ON ERROR")
//         console.log((err))
//     })