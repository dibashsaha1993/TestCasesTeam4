package com.ebay.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage {

	WebDriver driver;
	
	public HomePage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="gh-la")
	WebElement logoImg;
	
	@FindBy(id="gh-ac")
	WebElement searchTxtbox;
	
	@FindBy(id="gh-btn")
	WebElement searchBtn;
	
	@FindBy(xpath="//h1[@class='srp-controls__count-heading']")
	WebElement searchText;
	
	@FindBy(id="gh-shop-a")
	WebElement searchCat;
	
	@FindBy(linkText="Collectibles & art")
	WebElement collectionLink;
	
	@FindBy(linkText="Home & garden")
	WebElement homeLink;
	
	@FindBy(linkText="Electronics")
	WebElement electronicsLink;
	
	@FindBy(linkText="Fashion")
	WebElement fashionLink;
	
	@FindBy(xpath="//h1[@class='b-pageheader']")
	WebElement pageHeading;
	
	@FindBy(xpath="//nav/ol")
	WebElement breadcrum;
	
	

	public String getBreadCrum(){
		return breadcrum.getText();
	}
	

	public boolean verifyCatOption(){
		collectionLink.isDisplayed();
		homeLink.isDisplayed();
		electronicsLink.isDisplayed();
		fashionLink.isDisplayed();
		return true;
	}
	
	public void clickCatLink(){
		electronicsLink.click();
	}

	public void clickSearchCat(){
		searchCat.click();
	}

	public void clickLogo(){
		logoImg.click();
	}
	
	public void searchTxt(String val){
		searchTxtbox.clear();
		searchTxtbox.sendKeys(val);
	}
	
	public void clickSearchBtn(){
		searchBtn.click();
	}
	
	public String getSearchTxt(){
		return searchText.getText();
	}
	
	public String getPageHeadingTxt(){
		return pageHeading.getText();
	}
	
	
}
