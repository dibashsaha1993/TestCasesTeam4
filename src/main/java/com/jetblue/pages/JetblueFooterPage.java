package com.jetblue.pages;

import org.openqa.selenium.*;
import org.openqa.selenium.support.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class JetblueFooterPage {

	WebDriver driver;
	
	public JetblueFooterPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	public void clickMenuLink(String text){
		driver.findElement(By.linkText(text)).click();
	}

	
}
