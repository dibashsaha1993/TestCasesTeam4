package com.jetblue.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class JetblueForgetPasswordPage {

	WebDriver driver;
	
	public JetblueForgetPasswordPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="Sign in")
	WebElement signin;
	
	@FindBy(linkText="Forgot password?")
	WebElement forgotPass;

	@FindBy(xpath="//h1")
	WebElement heading;
	
	@FindBy(id="emailInput")
	WebElement emailId;

	@FindBy(xpath="/html/body/mp-root/div/ng-component/div/div/form/form-button-submit-pending/button")
	WebElement signinbtn;
	
	@FindBy(xpath="/html/body/mp-root/div/ng-component/div/div/form/div/div")
	WebElement userError;
	
	@FindBy(xpath="/html/body/mp-root/div/ng-component/div/div/form/div/div")
	WebElement invalidUserError;
	
	@FindBy(xpath="/html/body/mp-root/div/ng-component/div/div/p")
	WebElement resetText;
	
	@FindBy(xpath="//*[@id='needHelpBox']/ul/li")
	WebElement helpLoc;
	
	@FindBy(xpath="/html/body/mp-root/div/ng-component/div/div/p")
	WebElement registeredText;
	
	
	
	public String getRegisterText(){
		return registeredText.getText();
	}
	
	public String getRestLink(){
		return resetText.getText();
	}
	
	
	
	public String getHelpLocator(){
		return helpLoc.getText();
	}
	
	
	
	public void clickSignInLink(){
		signin.click();
	}
	
	public void clickForgotPassLink(){
		forgotPass.click();
	}
	
	public void enterUsername(String user){
		emailId.clear();
		emailId.sendKeys(user);
	}

	public void clickSignInBtn(){
		signinbtn.click();
	}
	

	public void clickMenuLink(String text){
		driver.findElement(By.linkText(text)).click();
	}
	

	public String getHeading(){
		return heading.getText();
	}
	
	public String getUserError(){
		return userError.getText();
	}
	
	public String getInvalidEmailError(){
		return invalidUserError.getText();
	}
	
	
	
}
