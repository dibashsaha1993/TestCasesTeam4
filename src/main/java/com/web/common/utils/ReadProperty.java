package com.web.common.utils;

import java.io.*;
import java.util.*;

public class ReadProperty {
	
	public void readUrl() throws Exception{
		Properties prop = new Properties();
		InputStream input = null;
		input = new FileInputStream("E:\\SeleniumAutomation\\feb_batch\\AmazonProject\\src\\main\\resources\\configtestData.properties");
		prop.load(input);
		prop.get("URL");
	}

}