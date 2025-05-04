class deleteproduct{

    producttodelete = "//h5[normalize-space()='orange (MYR50.00)']";
    detetebtn = "//body[1]/app-root[1]/div[1]/app-list[1]/div[2]/div[11]/div[1]/div[1]/a[2]";

    productdelete(detprod){

        cy.xpath(this.producttodelete).scrollIntoView();
        cy.xpath(this.detetebtn).click();
    }

}
export default deleteproduct