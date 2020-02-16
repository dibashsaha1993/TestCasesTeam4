package com.jetblue.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class JetblueSigninPage {

	WebDriver driver;
	
	public JetblueSigninPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(linkText="Sign in")
	WebElement signin;
	

	@FindBy(xpath="//h1")
	WebElement heading;
	
	@FindBy(xpath="//input[starts-with(@id,'login-email')]")
	WebElement username;
	
	@FindBy(xpath="//input[starts-with(@id,'password-email')]")
	WebElement password;
	

	@FindBy(xpath="/html/body/jb-app/jb-basic-template/div/jb-sign-in-page/div/div[2]/div/jb-trueblue/div/jb-tb-login/form/div[3]/button")
	WebElement signinbtn;
	
	@FindBy(xpath="/html/body/jb-app/jb-basic-template/div/jb-sign-in-page/div/div[2]/div/jb-trueblue/div/jb-tb-login/div[1]")
	WebElement emailPassError;
	

	@FindBy(id="emailError")
	WebElement userError;
	

	@FindBy(id="passwordError")
	WebElement passError;
	
	
	
	public void clickSignInLink(){
		signin.click();
	}
	
	public void enterUsername(String user){
		username.clear();
		username.sendKeys(user);
	}
	
	public void enterPassword(String user){
		password.clear();
		password.sendKeys(user);
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
	
	public String getPassError(){
		return passError.getText();
	}
	
	public String getEmailAndPassError(){
		return emailPassError.getText();
	}
	
	
	
}
