package com.ebay.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class AdvancedSearchPage {

	WebDriver driver;
	
	public AdvancedSearchPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="Find items")
	WebElement findItem;
	
	@FindBy(linkText="By seller")
	WebElement bySeller;
	
	@FindBy(linkText="By item number")
	WebElement byItemNumber;
	
	@FindBy(linkText="Advanced")
	WebElement advancedSearch;
	
	@FindBy(name="_nkw")
	WebElement keywordTxtbox;
	
	@FindBy(xpath="//*[@id='adv_search_from']/fieldset[1]/div[3]/button")
	WebElement searchBtn;
	
	@FindBy(name="_id")
	WebElement itemNumKeywordTxtbox;
	
	
	@FindBy(id="searchBtnLnk")
	WebElement itemNumSearchBtn;

	@FindBy(id="_fss")
	WebElement seller;
	

	@FindBy(id="_sasl")
	WebElement sellerTxt;
	
	@FindBy(id="searchBtnLowerLnk")
	WebElement searchBtnLowerLnk;
	

	public void typeSeller(String val){
		seller.click();
		sellerTxt.sendKeys(val);
		searchBtnLowerLnk.click();
	}
	
	public void clickBySeller(){
		bySeller.click();
	}

	
	public void clickFindItemNumLink(){
		byItemNumber.click();
	}

	public boolean verifyOption(){
		findItem.isDisplayed();
		bySeller.isDisplayed();
		byItemNumber.isDisplayed();
		return true;
	}
	
	public void clickAdvancedLink(){
		advancedSearch.click();
	}

	public void searchByItem(String val){
		keywordTxtbox.clear();
		keywordTxtbox.sendKeys(val);
		searchBtn.click();
	}

	public void searchByItemNumber(String val){
		itemNumKeywordTxtbox.sendKeys(val);
		itemNumSearchBtn.click();
	}

	public boolean getSearchResTxt(String val){
		return driver.findElement(By.xpath("//*[text()='"+val+"']")).isDisplayed();
	}
	
	public boolean verifyTextPresent(String val){
		return driver.findElement(By.xpath("//*[text()='"+val+"']")).isDisplayed();
	}
}
