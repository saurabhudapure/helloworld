// function submitForm() {
//     console.log("Inside function");
//     var product = {};

//     product.pName = $('productName').val();
//     product.cName = $('consumerName').val();
//     product.pCost = $('productCost').val();
//     alert(product.pName);
//     $.ajax({
//         type: 'GET',
//         url: 'http://localhost:3000/pdetails',
//         data: {
//             product
//             // pname: 'Product Name',
//             // cName: 'Consumer Name' ,
//             // pCost: 'Product Cost'
//         },
//         dataType: 'json',
//         success: function (data) {
//           alert('success');
//         }            
//     });
// }