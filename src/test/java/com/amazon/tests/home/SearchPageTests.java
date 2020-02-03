package com.amazon.tests.home;

import org.testng.Assert;
import org.testng.annotations.*;

import com.amazon.pages.login.HomePage;
import com.amazon.pages.login.SearchPage;
import com.web.common.utils.BaseTest;
import com.web.common.utils.CommonMethods;

public class SearchPageTests extends BaseTest{
	
	public SearchPageTests() throws Exception {
		super();
		// TODO Auto-generated constructor stub
	}

	@Test
	public void validateNoResult(){
		SearchPage searchPageObj=new SearchPage(driver);
		HomePage homePageObj=new HomePage(driver);

		String searchText="asdasdasdaasdasd";
		homePageObj.searchBox(searchText);
		String text=searchPageObj.noResultFound();
		String expectedText="Your search \""+searchText+"\" did not match any products.";
		Assert.assertEquals(text, expectedText);
	}
	
	@Test
	public void validateNoResuadasdlt(){
		
	}
}
