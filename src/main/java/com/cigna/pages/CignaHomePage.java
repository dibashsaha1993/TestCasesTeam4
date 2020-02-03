package com.cigna.pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CignaHomePage {

	WebDriver driver;

	public CignaHomePage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}

	@FindBy(xpath="(//a[@data-ct-component='nav-logo'])[2]")
	WebElement  logo;

	public void clickLogo(){
		logo.click();
	}

}
