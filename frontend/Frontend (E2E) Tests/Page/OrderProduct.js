class productorder{
    orderbtn = "//div[3]//div[1]//div[1]//a[3]";
    quantity = "//input[@id='product-quantity']";
    createorder = "//button[normalize-space()='Create Order']";


    ProductCreation(product){

        cy.xpath(this.orderbtn).click();
        cy.xpath(this.quantity).type("5");
        cy.xpath(this.createorder).click();
    }


}
export default productorder