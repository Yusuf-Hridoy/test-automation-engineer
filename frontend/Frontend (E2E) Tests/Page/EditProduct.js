class editproduct {

    Editbtn = "//div[@class='container']//div[1]//div[1]//div[1]//a[1]";
    productnameedit = "//input[@id='product-name']";
    productdescedit = "//textarea[@id='product-description']";
    productpriceedit = "//input[@id='product-price']";
    updateprice = "//button[normalize-space()='Update']";

    edittheproduct(productedit){

        cy.xpath(this.Editbtn).click();
        cy.xpath(this.productnameedit).type("wine");
        cy.xpath(this.productdescedit).type("test");
        cy.xpath(this.productpriceedit).type("500");
        cy.xpath(this.updateprice).click();
    }



}
export default editproduct