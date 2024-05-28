package com.util;

import javax.servlet.*;


import javax.servlet.http.*;

import java.io.*;

public class SetChar extends HttpServlet implements Filter {
	private FilterConfig filterConfig;

	// Handle the passed-in FilterConfig
	public void init(FilterConfig filterConfig) throws ServletException {
		this.filterConfig = filterConfig;
	}

	// Process the request/response pair
	public void doFilter(ServletRequest request, ServletResponse response,
			FilterChain filterChain) {
		try {
			  ((HttpServletResponse) response).setHeader("Pragma", "No-cache");
			  ((HttpServletResponse) response).setHeader("Cache-Control", "no-cache");
			  ((HttpServletResponse) response).setHeader("Expires", "0");
			//request.setCharacterEncoding("UTF-8");
			response.setCharacterEncoding("UTF-8");
			request.setCharacterEncoding("UTF-8");
			filterChain.doFilter(request, response);
		} catch (ServletException sx) {
			filterConfig.getServletContext().log(sx.getMessage());
		} catch (IOException iox) {
			filterConfig.getServletContext().log(iox.getMessage());
		}
	}

	// Clean up resources
	public void destroy() {
	}
}
