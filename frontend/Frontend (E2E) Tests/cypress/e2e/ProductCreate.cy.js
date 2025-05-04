import createproduct from   "../../Page/CreateProduct";

describe('Create product', ()=>{

    it('Test 1', () =>{
        cy.visit("http://localhost:4200/")
        const ln = new createproduct();
        ln.createtheproduct();
    })
})

