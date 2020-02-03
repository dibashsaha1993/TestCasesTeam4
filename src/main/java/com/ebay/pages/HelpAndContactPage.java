package com.ebay.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HelpAndContactPage {

	WebDriver driver;
	
	public HelpAndContactPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="Help & Contact")
	WebElement helpLink;
	
	@FindBy(id="gh-title")
	WebElement helpHeading;
	
	@FindBy(id="search_input_element")
	WebElement searchTxtBox;
	
	@FindBy(xpath="//*[@id='search_suggestions_lists']/a[1]")
	WebElement clickSearchIcon;
	
	@FindBy(xpath="//*[@class='article_title']")
	WebElement searchHeading;
	

	@FindBy(id="bc")
	WebElement breadcrum;
	
	@FindBy(linkText="Daily Deals")
	WebElement dailydeals;
	
	
	public String getHelpBreadcrum(){
		return breadcrum.getText();
	}

	public void enterHelp(String val){
		searchTxtBox.sendKeys(val);
	}
	
	public String getSearchTitle(){
		return searchHeading.getText();
	}
	
	public void clickDailyDeal(){
		dailydeals.click();
	}
	
	public void clickSearchIcon(){
		clickSearchIcon.click();
	}
	
	public void clickHelpLink(){
		helpLink.click();
	}
	

	public String getHelpHeading(){
		return helpHeading.getText();
	}
	

	
}
