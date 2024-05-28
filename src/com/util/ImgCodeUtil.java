package com.util;



import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.image.BufferedImage;
import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.Random;

import javax.imageio.ImageIO;
import javax.imageio.stream.ImageOutputStream;
/**
 * 图片验证码工具类
 * @author mashiji
 *
 */
public class ImgCodeUtil {
	private ByteArrayInputStream image;// 图像
	private String str;// 验证码

	private ImgCodeUtil() {
		init();// 初始化属性
	}

	/*
	 * 取得RandomNumUtil实例
	 */
	public static ImgCodeUtil Instance() {
		return new ImgCodeUtil();
	}

	/*
	 * 取得验证码图片
	 */
	public ByteArrayInputStream getImage() {
		return this.image;
	}

	/*
	 * 取得图片的验证码
	 */
	public String getString() {
		return this.str;
	}

	private void init() {
		// 在内存中创建图象
		int width = 70, height = 30;
		BufferedImage image = new BufferedImage(width, height,
				BufferedImage.TYPE_INT_RGB);
		// 获取图形上下文
		Graphics g = image.getGraphics();
		// 生成随机类
		Random random = new Random();
		// 设定背景色
		g.setColor(getRandColor(200, 250));
		g.fillRect(0, 0, width, height);
		// 设定字体
		g.setFont(new Font("Times New Roman", Font.PLAIN, 23));
		// 随机产生155条干扰线，使图象中的认证码不易被其它程序探测到
		g.setColor(getRandColor(200, 250));
		for (int i = 0; i < 20; i++) {
			int x = random.nextInt(width);
			int y = random.nextInt(height);
			int xl = random.nextInt(6);
			int yl = random.nextInt(12);
			g.drawLine(x, y, x + xl+90, y + yl+20);
		}
		// 取随机产生的认证码
		String old = "23456789abcdefghijkmnpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"; // 验证图片上面的随机字符
		String sRand = "";
		int j = 0;
		for (int i = 0; i < 4; i++) {
			j = random.nextInt(old.length());
			String rand = String.valueOf(old.substring(j, j + 1));
			sRand += rand;
			
			// 将认证码显示到图象中
			g.setColor(new Color(20 + random.nextInt(110), 20 + random
					.nextInt(110), 20 + random.nextInt(110)));
			// 调用函数出来的颜色相同，可能是因为种子太接近，所以只能直接生成
			g.drawString(rand, 13 * i + 8, 25);
		}
		shear(g, 70, 30,getRandColor(200, 250));// 使图片扭曲
		// 赋值验证码
		this.str = sRand;
		// 图象生效
		g.dispose();
		  
		ByteArrayInputStream input = null;
		ByteArrayOutputStream output = new ByteArrayOutputStream();
		try {
			ImageOutputStream imageOut = ImageIO
					.createImageOutputStream(output);
			ImageIO.write(image, "JPEG", imageOut);
			imageOut.close();
			input = new ByteArrayInputStream(output.toByteArray());
		} catch (Exception e) {
			System.out.println("验证码图片产生出现错误：" + e.toString());
		}
		this.image = input;/* 赋值图像 */
	}

	/*
	 * 给定范围获得随机颜色
	 */
	private Color getRandColor(int fc, int bc) {
		Random random = new Random();
		if (fc > 255)
			fc = 255;
		if (bc > 255)
			bc = 255;
		int r = fc + random.nextInt(bc - fc);
		int g = fc + random.nextInt(bc - fc);
		int b = fc + random.nextInt(bc - fc);
		return new Color(r, g, b);
	}
	
	
	//使图片扭曲方法
	 private static void shear(Graphics g, int w1, int h1, Color color) {  
	        shearX(g, w1, h1, color);  
	        shearY(g, w1, h1, color);  
	    }  
	      
	    private static void shearX(Graphics g, int w1, int h1, Color color) {  
	    	Random random = new Random();
	        int period = random.nextInt(2);  
	  
	        boolean borderGap = true;  
	        int frames = 1;  
	        int phase = random.nextInt(2);  
	  
	        for (int i = 0; i < h1; i++) {  
	            double d = (double) (period >> 1)  
	                    * Math.sin((double) i / (double) period  
	                            + (6.2831853071795862D * (double) phase)  
	                            / (double) frames);  
	            g.copyArea(0, i, w1, 1, (int) d, 0);  
	            if (borderGap) {  
	                g.setColor(color);  
	                g.drawLine((int) d, i, 0, i);  
	                g.drawLine((int) d + w1, i, w1, i);  
	            }  
	        }  
	  
	    }  
	  
	    private static void shearY(Graphics g, int w1, int h1, Color color) {  
	    	Random random = new Random();
	        int period = random.nextInt(12) + 10; // 50;  
	  
	        boolean borderGap = true;  
	        int frames = 20;  
	        int phase = 7;  
	        for (int i = 0; i < w1; i++) {  
	            double d = (double) (period >> 1)  
	                    * Math.sin((double) i / (double) period  
	                            + (6.2831853071795862D * (double) phase)  
	                            / (double) frames);  
	            g.copyArea(i, 0, 1, h1, 0, (int) d);  
	            if (borderGap) {  
	                g.setColor(color);  
	                g.drawLine(i, (int) d, i, 0);  
	                g.drawLine(i, (int) d + h1, i, h1);  
	            }  
	  
	        }  
	  
	    }  
	
	
	
}

