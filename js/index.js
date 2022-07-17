// const fetchProduct= async()=>{
// const res =await fetch("https://fakestoreapi.com/products")
// const data= await res.json()
// console.log(data)
// }
const fetchProduct=()=>{
  fetch("https://fakestoreapi.com/products")
  .then((response)=>response.json())
  .then((data)=>
  {
    data.forEach((product) => {
      createProductsDiv(product);
    })
  }
  )
  .catch(error=>console.log(error))
  

}



