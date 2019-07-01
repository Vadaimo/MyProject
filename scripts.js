$(document).ready(function(){
	$('#btn').click(function(){
		if ($('#num').val() == ''){
			alert('Input can not be left blank');
			$("#cont").html("");
		} else {
			if ($('#info').val() == ''){
				alert('Input can not be left blank');
				$("#cont").html("");
			} else {
				let number = $("#num").val();
				let type = $("#info").val();
				$.ajax({
					type: "GET",
					url: "http://numbersapi.com/" + number + "/" + type, 
					dataType : "text",
					success: function(data) {
						console.log(data);
						$("#cont").text(data);
					}
			
				});
			}
		}
	});
	$('#del').click(function(){
		$("#cont").html("");
		$("#num").val("");
		$("#info").val("");
	})
	
});