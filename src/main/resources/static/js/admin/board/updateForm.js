$("#boardUpdateBtn").on("click", function(){
	if(!chkData("#boardTitle", "제목을")) return;
	else if(!chkData("#boardContent", "내용을")) return;
	if(!chkData("#boardPasswd", "비밀번호를")) return;

		actionProcess("#updateForm", "post", "/admin/board/boardUpdate");
});

$(document).ready(function() {
    $("#boardUpdateBtn").on("click", function(event) {
        event.preventDefault(); // 기본 폼 제출 동작을 방지
        if (!chkData("#boardTitle", "제목을")) return;
        if (!chkData("#boardContent", "내용을")) return;
        if (!chkData("#boardPasswd", "비밀번호를")) return;

        var formData = $("#updateForm").serialize();

        $.ajax({
            url: "/adminBoard/pwdConfirm",
            method: "POST", 
            dataType:"text",
			data: {
				"boardNo" : $("#boardNo").val(),
				"passwd" : $("#boardPasswd").val()
			}, 
            success: function(response) {
				if(response=="일치"){
     
                	actionProcess("#updateForm", "post", "/admin/board/boardUpdate");
				}
				else if(response=="불일치"){
					alert("비밀번호가 일치하지 않습니다");
					return;
				}
            },
            error: function(xhr) {
          
			}
        });
    });
});

$("#boardCancelBtn").on("click", function(){
	$("#updateForm").each(function(){
		this.reset();
	});
});

$("#boardListBtn").on("click", function(){
	locationProcess("/admin/board/boardList");
});

/* 필요없는듯
// errorHandling.js
$(document).ready(function() {
	const errorMessage = /*[[${errorMessage}]]* /''; // 주석 확인
	if(errorMessage!=''){
		alert(errorMessage);
		return;
	}
});
*/
