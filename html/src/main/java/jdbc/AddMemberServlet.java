package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
    public AddMemberServlet() {
        super();
       
    }

	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) 
			throws ServletException, IOException {
		//요청 정보 param.
		request.setCharacterEncoding("utf-8"); // 한글처리.
		response.setContentType("text/jon;charset=utf-8");
		
		String id = request.getParameter("mid");
		String pw = request.getParameter("mps");
		String name = request.getParameter("mnm");
		
		Member member = new Member();
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberName(name);
		member.setRole("0");
		
		MemberManage dao = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member);
		
		// 처리결과를 ajax 호출한 페이지로 반환.
		if (addCnt == 1) {
			// {"retCode": "success", "memberId": "user1","memberPw": 1234, "memberName": "사용자"}
			String json = "{\"retCode\": \"success\", \"memberId\": \""+id+"\", \"memberPw\": \""+pw+"\", \"memberName\": \""+name+"\"}";
			response.getWriter().print(json);
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
			
		}
		
		
	}

}
