const productParent = document.getElementById("products")

const createProductsDiv=(product)=>{
const colDiv=document.createElement("div")
const productDiv=document.createElement("div")
const productImg=document.createElement("img")
const productBody=document.createElement("div")
const productHeader=document.createElement("div")
const productTitel=document.createElement("p")
const productPrice=document.createElement("p")
const productDescription=document.createElement("p")
const productRating=document.createElement("div")
const ratingStar1=document.createElement("span")
const ratingStar2=document.createElement("span")
const ratingStar3=document.createElement("span")
const ratingStar4=document.createElement("span")
const ratingStar5=document.createElement("span")
const ratingCount=document.createElement("span")
const CardButtonOuter=document.createElement("div")
const addToCartButton=document.createElement("a")
const buyButton=document.createElement("a")


colDiv.classList='col-md-4'
productDiv.classList='card product'
productImg.classList='card-img-top'
productBody.classList='card-body'
productHeader.classList='product-head'
productTitel.classList='card-title'
productPrice.classList='card-title price'
productDescription.classList='card-text'
productRating.classList='rating'
ratingStar1.classList='fa fa-star checked'
ratingStar2.classList='fa fa-star checked'
ratingStar3.classList='fa fa-star checked'
ratingStar4.classList='fa fa-star checked'
ratingStar5.classList='fa fa-star checked'
ratingCount.classList='rating-count'
CardButtonOuter.classList='btn-outer'
addToCartButton.classList='btn btn-primary'
buyButton.classList='btn btn-primary'

colDiv.id=`product-${product.id}`


productImg.src= product.image
productImg.alt="Product Image";
productTitel.innerText=`${product.title.slice(0,20)}...`
productPrice.innerText=product.price+" Rs /-"
productDescription.innerText=`${product.description.slice(0,50)}...`
ratingCount.innerText=`(${product.rating.count})`
addToCartButton.innerText='Add to cart'
buyButton.innerText='Buy now'


productParent.appendChild(colDiv)
colDiv.appendChild(productDiv)
productDiv.appendChild(productImg)
productDiv.appendChild(productBody)
productBody.appendChild(productHeader)
productHeader.appendChild(productTitel)
productHeader.appendChild(productPrice)
productBody.appendChild(productDescription)
productBody.appendChild(productRating)
productRating.appendChild(ratingStar1)
productRating.appendChild(ratingStar2)
productRating.appendChild(ratingStar3)
productRating.appendChild(ratingStar4)
productRating.appendChild(ratingStar5)
productRating.appendChild(ratingCount)
productBody.appendChild(CardButtonOuter)
CardButtonOuter.appendChild(addToCartButton)
CardButtonOuter.appendChild(buyButton)

}

{/* <div class="col-md-4">
          <div class="card product" >
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
              <div class="product-head">
                <h5 class="card-title">Card title</h5>
                <h5 class="card-title price">300$</h5>
              </div>

              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>

              <div class="rating">
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span class="rating-count">(102)</span>
                
              </div>
              <div class="btn-outer">
                <a href="#" class="btn btn-primary">Add to cart</a>
                <a href="#" class="btn btn-primary">Buy Now</a>
              </div>
            </div>
          </div>
        </div> */}