package com.sprint.test;

import com.sprint.BusinessPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;


public class SprintBusinessPageTest {

    public WebDriver driver;

    public BusinessPage businessPageobj;

    @BeforeTest
    public void setup() {
        System.setProperty("webdriver.chrome.driver", "/Users/dibashsaha/Desktop/LearnSetupMaven/DriverHere/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://business.sprint.com/");

        businessPageobj = new BusinessPage(driver);

    }

    @AfterTest
    public void tearDown() {
        driver.quit();
    }

    @Test(priority = 1)
    public void SmallBusniessLink(){
        businessPageobj.Validate_SmallBusniessLink();
    }
    @Test(priority = 2)
    public void SearchButtonBP(){
        businessPageobj.Validate_SearchTab();
    }
    @Test(priority = 3)
    public void LearnMoreTab(){
        businessPageobj.Validate_LearnMoreTab();
    }
    @Test(priority = 4)
    public void IwouldLikeToTab(){
        businessPageobj.Validate_IwouldLikeTab();
    }
    @Test(priority = 5)
    public void SolutionTab(){
        businessPageobj.Validate_Solution();
    }
    @Test(priority = 6)
    public void WhySprint(){
        businessPageobj.Validate_WhySprint();
    }
    @Test(priority = 7)
    public void Validate_NetworkTab(){
        businessPageobj.Validate_networkTab();
    }
    @Test(priority = 8)
    public void Validate_ShopTab(){
        businessPageobj.Validate_ShopTab();
    }


}
