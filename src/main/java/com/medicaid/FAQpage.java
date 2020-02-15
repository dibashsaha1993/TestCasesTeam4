package com.medicaid;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class FAQpage {

    WebDriver driver;

    public FAQpage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }
    @FindBy(id ="query-input")
    WebElement SearchInput;
    public void Validate_searchInput(){
        SearchInput.sendKeys("InputHere");
    }
    @FindBy(css = "#collectionFilterSort > fieldset.blog-sort.faq-blog-sort > span > select")
    WebElement sortBoxTab;
    public void Validate_SortBox(){
        sortBoxTab.click();
    }
    @FindBy(id = "fromDate")
    WebElement DateBox;
    public void DateBoxTab(){
        DateBox.click();
    }
    @FindBy(css = "#mainContent > div > div.dynamicListing__content > div.dynamicListing__search.usa-search-container.faq-search > div.dynamicListing__search__share > button")
    WebElement ShareResultTab;
    public void ShareResult_Validation(){
        ShareResultTab.click();
    }
    @FindBy(css = "#fadeandscale > button")
    WebElement Close;
    public void Closetab(){
        Close.click();
    }


    @FindBy(css = "#collectionFilterSort > div > button")
    WebElement ResetAllButton;
    public void ValidateResetButton(){
        ResetAllButton.click();
    }
    @FindBy(css = "#toggle-panels > span:nth-child(1) > li > button > span:nth-child(1) > svg")
    WebElement PlusButton1;
    public void Validate_PlusButton1(){
        PlusButton1.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(2) > li > button > span:nth-child(1)")
    WebElement PlusButton2;
    public void Validate_PlusButton2(){
        PlusButton2.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(3) > li > button > span:nth-child(1)")
    WebElement PlusButton3;
    public void Validate_PlusButton3(){
        PlusButton3.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(4) > li > button > span:nth-child(1)")
    WebElement PlusButton4;
    public void Validate_PlusButton4(){
        PlusButton4.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(5) > li > button > span:nth-child(1)")
    WebElement PlusButton5;
    public void Validate_PlusButton5(){
        PlusButton5.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(6) > li > button > span:nth-child(1)")
    WebElement PlusButton6;
    public void Validate_PlusButton6() {
        PlusButton6.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(7) > li > button > span:nth-child(1)")
    WebElement PlusButton7;
    public void Validate_PlusButton7() {
        PlusButton7.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(8) > li > button > span:nth-child(1)")
    WebElement PlusButton8;
    public void Validate_PlusButton8() {
        PlusButton8.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(9) > li > button > span:nth-child(1)")
    WebElement PlusButton9;
    public void Validate_PlusButton9() {
        PlusButton9.click();
    }
    @FindBy(css ="#toggle-panels > span:nth-child(10) > li > button > span:nth-child(1)")
    WebElement PlusButton10;
    public void Validate_PlusButton10() {
        PlusButton9.click();
    }
}
