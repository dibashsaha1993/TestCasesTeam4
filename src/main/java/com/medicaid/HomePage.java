package com.medicaid;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage {
WebDriver driver;

public HomePage(WebDriver driver) {
    this.driver = driver;
    PageFactory.initElements(driver, this);
}

@FindBy(xpath = "//div[@class='whiteLine usa-navbar']//a//h1//img")
WebElement Logo;
public void Validate_Logo(){
    Logo.click();
}

@FindBy(xpath = "//*[@id=\"ubermenu-main-2-primary\"]/div/div/ul/li[1]")
WebElement SearchButton;
public void ValidateSearchButton(){
    SearchButton.click();
}
@FindBy(xpath = "//*[@id=\"ubermenu-main-2-primary\"]/div/div/ul/li[3]/a")
WebElement SiteMap;
public void ValidateSiteMap(){
    SiteMap.click();
}
@FindBy(xpath = "//*[@id=\"ubermenu-main-2-primary\"]/div/div/ul/li[4]/a")
WebElement FAQLink;
public void FaQLink(){
    FAQLink.click();
}
@FindBy(xpath = "//input[@id='query-input']")
WebElement UserSearchingBox;
public void ValidateUserSearching(){
    UserSearchingBox.click();
}

@FindBy(xpath ="//*[@id=\"ubermenu-main-2-primary\"]/div/ul/li[3]/a/span")
WebElement FederalPolicyGuidance;
public void ValidateFederalPolicy(){
    FederalPolicyGuidance.click();
}
@FindBy(xpath = "//*[@id=\"ubermenu-main-2-primary\"]/div/ul/li[5]/a/span")
WebElement BasicHealthProgram;
public void ValidateBasicHealth(){
    BasicHealthProgram.click();
}
@FindBy(xpath = "//a[@class='clipboard mddSnLinkIconTxtInline usa-media_block-img']")
WebElement ApplyforCoverageLogo;
public void ValidateApplyCoverageLogo(){
    ApplyforCoverageLogo.click();
}
@FindBy(xpath = "//a[@class='comment mddSnLinkIconTxtInline usa-media_block-img']")
WebElement ConversationLogo;
public void ConversationLogoValidation(){
    ConversationLogo.click();
}
@FindBy(xpath = "//*[@id=\"mainContent\"]/div[1]/div/div[3]/a")
WebElement MedicaidChipLogo;
public void Validate_ChipLogo(){
    MedicaidChipLogo.click();
}






}
