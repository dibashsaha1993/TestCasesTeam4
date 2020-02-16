package com.jetblue.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class JetblueHomePage {

	WebDriver driver;
	
	public JetblueHomePage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(xpath="/html/body/jb-app/jb-header/jb-header-desktop/div[2]/div/div/div/jb-logo/a/img")
	WebElement logo;
	
	@FindBy(xpath="//h1")
	WebElement heading;
	

	public void clickLogo(){
		logo.click();
	}
	
	public void clickMenuLink(String text){
		driver.findElement(By.linkText(text)).click();
	}
	

	public String getHeading(){
		return heading.getText();
	}
	

	
}
