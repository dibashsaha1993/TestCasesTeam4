package com.cigna.test;

import com.web.common.utils.BaseTest;
import com.cigna.pages.CignaHomePage;
import junit.framework.Assert;
import org.testng.annotations.Test;

public class CignaHmePageTests extends BaseTest {

    public CignaHmePageTests() throws Exception {
        super();
    }

    @Test
    public void validateLogo(){
        cignaHomePageObj.clickLogo();
        String actual=driver.getCurrentUrl();
        Assert.assertEquals("https://www.cigna.com/",actual);
    }



}
