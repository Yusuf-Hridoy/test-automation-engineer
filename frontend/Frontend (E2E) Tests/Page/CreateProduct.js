class createproduct {

    product = "/html/body/app-root/div/app-navbar/nav/div/div/ul/li[1]/a";
    createbtn = "//a[normalize-space()='Create']";
    productname = "//input[@id='product-name']";
    productdescription = "//textarea[@id='product-description']";
    productprice = "//input[@id='product-price']";
    Createproduct = "//button[normalize-space()='Create']"

    Clickproduct(product){
        cy.xpath(this.product).click();
    }

    createtheproduct(product)
{
    cy.xpath(this.product).click();
    cy.xpath(this.createbtn).click();
    cy.xpath(this.productname).type("paddy");
    cy.xpath(this.productdescription).type("field thing");
    cy.xpath(this.productprice).type("30");
    cy.xpath(this.Createproduct).click();
}

}
export default createproduct

