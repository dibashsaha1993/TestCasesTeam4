package com.ebay.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class SignInPage {

	WebDriver driver;
	
	public SignInPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="Sign in")
	WebElement signin;
	
	@FindBy(linkText="create an account")
	WebElement createAcc;
	
	@FindBy(linkText="User Agreement")
	WebElement userAgreement;
	
	@FindBy(xpath="//h1")
	WebElement heading;
	
	@FindBy(linkText="User Privacy Notice")
	WebElement userPlicy;
	
	@FindBy(id="gh-la")
	WebElement logoImg;
	
	@FindBy(id="signin_fb_btn")
	WebElement fbbtn;
	
	
	@FindBy(id="signin_ggl_btn")
	WebElement googlebtn;
	
	public boolean verifyFbAndGoogleBtn(){
		fbbtn.isDisplayed();
		googlebtn.isDisplayed();
		return true;
	}
	
	public void clickFbBtn(){
		fbbtn.click();
	}
	
	public void clickGoogleBtn(){
		googlebtn.click();
	}
	
	
	public void clickLogo(){
		logoImg.click();
	}
	
	
	public void clickUserPolicy(){
		userPlicy.click();
	}
	
	public String getAgreementHeading(){
		return heading.getText();
	}
	
	public String getPolicyHeading(){
		return heading.getText();
	}
	
	public void clickUserAgreement(){
		userAgreement.click();
	}
	public void clickCreateAcc(){
		createAcc.click();
	}
	
	public void clickSignInLink(){
		signin.click();
	}
	
	
}
