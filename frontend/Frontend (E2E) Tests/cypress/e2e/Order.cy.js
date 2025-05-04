import createproduct from   "../../Page/CreateProduct";
import OrderProduct from   "../../Page/OrderProduct";


describe('Order product', ()=>{

    it('Order 1', () =>{
        cy.visit("http://localhost:4200/")
        const kn = new createproduct();
        const ln = new OrderProduct();
        kn.Clickproduct();

        ln.ProductCreation();
    })
})
