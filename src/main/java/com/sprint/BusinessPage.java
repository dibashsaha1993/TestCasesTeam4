package com.sprint;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BusinessPage {

    WebDriver driver;

    public BusinessPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    @FindBy(xpath = "//ul[@id='menu-consumer-site-menu']//a[contains(text(),'Small Business')]")
    WebElement SmallBusinessLink;

    public void Validate_SmallBusniessLink() {
        SmallBusinessLink.click();
    }

    @FindBy(xpath = "//*[@id=\"main-nav\"]/div/button")
    WebElement SearchTab;

    public void Validate_SearchTab() {
        SearchTab.click();
    }

    @FindBy(xpath = "//p[@class='pt-1 pb-2']//a[@class='btn btn-primary'][contains(text(),'Learn more')]")
    WebElement LearnMoreTab;

    public void Validate_LearnMoreTab() {
        LearnMoreTab.click();
    }

    @FindBy(linkText = "I would like to…")
    WebElement IwouldLikeToTab;

    public void Validate_IwouldLikeTab() {
        IwouldLikeToTab.click();
    }

    @FindBy(xpath = "//span[@xpath='1']")
    WebElement SolutionTab;

    public void Validate_Solution() {
        SolutionTab.click();
    }

    @FindBy(xpath = "//a[contains(text(),'Why Sprint')]")
    WebElement whySprint;

    public void Validate_WhySprint() {
        whySprint.click();
    }
    @FindBy(css = "#menu-main-menu > li.menu-item.menu-item-type-post_type.menu-item-object-page.menu-item-18045.publish > a")
    WebElement networkTab;
    public void Validate_networkTab(){
        networkTab.click();
    }
    @FindBy(xpath = "//*[@id=\"menu-main-menu\"]/li[6]/a")
    WebElement ShopTab;
    public void Validate_ShopTab(){
        ShopTab.click();
    }

}