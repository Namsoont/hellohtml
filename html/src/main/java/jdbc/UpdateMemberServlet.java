package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/updateMemberServlet")
public class UpdateMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public UpdateMemberServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		request.setCharacterEncoding("utf-8"); // 한글처리.
		response.setContentType("text/jon;charset=utf-8");
		//'mid='+id+'&mnm='+name+'&mpw='+pw;
		String id = request.getParameter("mid");
		String pw = request.getParameter("mpw");
		String name = request.getParameter("mnm");
		
		Member mem = new Member();
		mem.setMemberId(id);
		mem.setMemberName(name);
		mem.setMemberPw(pw);
		
		MemberManage dao = MemberManage.getInstance();
		request.setCharacterEncoding("utf-8"); // 한글처리.
		response.setContentType("text/jon;charset=utf-8");
		
		// 정상적으로 처리되면 retCode => success, or retCode => fail.
		if (dao.updateMember(mem)) {
			String json = "{\"retCode\": \"success\", \"memberId\": \""+id+"\", \"memberPw\": \""+pw+"\", \"memberName\": \""+name+"\"}";
			response.getWriter().print(json);
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		} 
		
		
		
	}

}
