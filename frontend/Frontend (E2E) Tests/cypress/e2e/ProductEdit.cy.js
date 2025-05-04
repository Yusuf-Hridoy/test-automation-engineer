import editproduct from "../../Page/EditProduct";
import createproduct from   "../../Page/CreateProduct";


describe('Edit product', ()=>{

    it('Edit 1', () =>{
        cy.visit("http://localhost:4200/")
        const kn = new createproduct();
        const ln = new editproduct();
        kn.Clickproduct();

        ln.edittheproduct();
    })
})

