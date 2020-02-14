package com.sprint.test;

import com.sprint.BusinessPage;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
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
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://smallbusiness.sprint.com/?INTNAV=Header:SmallBusiness");
    }
    @Test(priority = 2)
    public void SearchButtonBP(){
        businessPageobj.Validate_SearchTab();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/");
    }
   // @Test(priority = 3)
    public void LearnMoreTab(){
        businessPageobj.Validate_LearnMoreTab();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/");
    }
    @Test(priority = 4)
    public void IwouldLikeToTab(){
        businessPageobj.Validate_IwouldLikeTab();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/#");
    }
    @Test(priority = 5)
    public void SolutionTab(){
        businessPageobj.Validate_Solution();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/solutions/");
    }
    @Test(priority = 6)
    public void WhySprint(){
        businessPageobj.Validate_WhySprint();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/why-sprint/");
    }
    @Test(priority = 7)
    public void Validate_NetworkTab(){
        businessPageobj.Validate_networkTab();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/network/?INTNAV=Header:Network");
    }
    @Test(priority = 8)
    public void Validate_ShopTab(){
        businessPageobj.Validate_ShopTab();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals(actual,"https://business.sprint.com/shop/?INTNAV=Header:Shop&flow=&tabId=dvcTab1820005");
    }


}
