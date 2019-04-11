function fetchproducts(done){
  $.get('api/products',function(data){
      done(data)
  })
}
function fetchcarts(done){
  $.get('api/carts',function(data){
      done(data)
  })
}
function addproduct(name,manuf,price,done){
$.post('/api/products',{
  name:name,
  manufacturer:manuf,
  price:price
},function(data){
  done(data)
})
}

function addcart(name,manufacturer,price){
  $.post('/api/carts',{
    name:name,
    manufacturer:manufacturer,
    price:price
  })
    window.alert("added " + "product " + "to cart")

}
function createproductcard(product){
return $(` <div class="col-4 card mx-2 p-4">
<h4 class="product-name">${product.name}</h4> 
<div class="product-manufacturer">${product.manufacturer}</div>
<div class="row"
   <div class="col m-3 p-3">
      <b>${product.price}</b>
      </div>

     <button class="btn btn-primary">BUY</button>
     <br>
     <button onClick="addcart('${product.name}','${product.manufacturer}','${product.price}')" class="btn btn-primary">ADD TO CARTS</button>
   </div>
</div>`)   
}


function createcartcard(product){
  return $(` <div class="col-4 card mx-2 p-4">
  <h4 class="product-name">${product.name}</h4> 
  <div class="product-manufacturer">${product.manufacturer}</div>
  <div class="row"
     <div class="col m-3 p-3">
        <b>${product.price}</b>
        </div>
       <button class="btn btn-primary">BUY</button>
       <br>
     </div>
  </div>`)   
  }