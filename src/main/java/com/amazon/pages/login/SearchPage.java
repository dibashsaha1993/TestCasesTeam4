package com.amazon.pages.login;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.amazon.interfaces.home.SearchPageInterface;

public class SearchPage implements SearchPageInterface{

	@FindBy(id="sort")
	WebElement sortDropDown;
	
	@FindBy(id="noResultsTitle")
	WebElement noResultTitle;
	
	@FindBy(xpath="//*[@id='noResultsTitle']")
	WebElement noResultTitle1;
	
	WebDriver driver;
	
	public SearchPage(WebDriver driver){
		this.driver=driver;
		PageFactory.initElements(driver, this);
	}
	
	public String noResultFound() {
		return noResultTitle.getText();
	}

	public void filter() {
		// TODO Auto-generated method stub
		Select selectProduct=new Select(sortDropDown);
		selectProduct.selectByVisibleText("Price: Low to High");	
	}

	public void clickShowResuts(String product) {
		// TODO Auto-generated method stub
		
	}

	public void resultCount() {
		// TODO Auto-generated method stub
		
	}

}
