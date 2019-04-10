const route=require('express').Router()
const Cart=require('../../db').Cart

route.get('/',(req,res)=>{
    Cart.findAll()
    .then((carts)=>{
res.status(200).send(carts)
    })
    .catch((err)=>{
        res.status(500).send({
            error:"could not retrieve cart"
        })

    })

})

route.post('/',(req,res)=>{
    Cart.create ({
        name:req.body.name,
        manufacturer:req.body.manufacturer,
        price:req.body.price
    }).then((cart)=>{
        res.status(201).send(cart)
    })
    .catch((err)=>{
        res.status(501).send({
   error:"error adding to carts"
        })  })
    })



exports=module.exports=route