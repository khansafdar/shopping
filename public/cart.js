
$(()=>{
    let cartList=$('#cart-list')
    fetchcarts(function(carts){
        cartList.empty()
        for(cart of carts){
         cartList.append(createcartcard(cart))
        }
    })
})
