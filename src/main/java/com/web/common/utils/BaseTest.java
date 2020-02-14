package com.web.common.utils;

import java.io.*;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.io.Reader;
import java.util.Properties;

import com.cigna.pages.CignaHomePage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.annotations.*;

import com.ebay.pages.AdvancedSearchPage;
import com.ebay.pages.HelpAndContactPage;
import com.ebay.pages.HomePage;
import com.ebay.pages.SignInPage;

public class BaseTest{
	
	String ENV="prod";
	
	Properties prop;
	static String URL;
	static String BROWSER;
	
	public HomePage homePageObj;
	public AdvancedSearchPage advanceSearchPageObj;
	public SignInPage signInPageObj;
	public HelpAndContactPage helpPageObj;

	//create object for Cigna
	public CignaHomePage cignaHomePageObj;

	
	public BaseTest() throws Exception{ 
		prop = new Properties();
		InputStream input = null;
		String file = "testData.properties";
		input = new FileInputStream("/Users/dibashsaha/Desktop/DibashProject/src/main/resources/prod/testData.properties");
		//input = new FileInputStream("src\\main\\resources\\"+ENV+"\\testData.properties");
		//Reader reader = new InputStreamReader(getClass().getResourceAsStream("/" + file), "UTF-8");
		prop.load(input);
		URL= (String) prop.get("URL");
		BROWSER= (String) prop.get("BROWSER");
	}
	
	
	public WebDriver driver;
	
	@Parameters({"browser","url"})
	@BeforeClass
	public void setup(String brws,String url){
		
		if(brws.equals("chrome")){
		
		System.setProperty("webdriver.chrome.driver", "drivers/chromedriver");
		driver =new ChromeDriver();
		
		}else if(brws.equals("firefox")){
			System.setProperty("webdriver.chrome.driver", "drivers\\geckodriver.exe");
			driver =new ChromeDriver();
				
		}
		driver.get(url);
		
		homePageObj = new HomePage(driver);
		advanceSearchPageObj = new AdvancedSearchPage(driver);
		signInPageObj = new SignInPage(driver);
		helpPageObj = new HelpAndContactPage(driver);

		//intiate object
		cignaHomePageObj = new CignaHomePage(driver);

	}

	@AfterClass
	public void tearDown(){
		driver.quit();
	}
}
