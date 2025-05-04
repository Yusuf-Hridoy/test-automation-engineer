import createproduct from   "../../Page/CreateProduct";
import deleteproduct from   "../../Page/Deleteproduct";

describe('Delete product', ()=>{

    it('Delete 1', () =>{
        cy.visit("http://localhost:4200/")
        const kn = new createproduct();
        const ln = new deleteproduct();
        kn.Clickproduct();

        ln.productdelete();
    })
})