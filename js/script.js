(function($){
	$("#tabs").tabs();
    $("body").fadeIn();
		
    $("#close").click(function(){
        $("#notice").effect("explode");
    });
	
	$('tr:even').addClass('alt');
    $('td').each(function() {
        $(this).attr("valign", "top");
    });
    $("tr").hover(
        function() { $(this).addClass('over'); },
        function() { $(this).removeClass('over'); }
    );
	
	// Examples
	$("#default_usage").counter();
	$("#default_usage_num_only").counter({'text' : false}); 
	$("#charUp").counter({
		count : 'up',
		goal : 10
	});
	$("#wordDown").counter({
		type : 'word',
		goal : 20
	});
	
	$("#wordUp").counter({
        type: 'word',
        goal: 20,
        count: 'up'
    });  
    
    $("#custom_msg").counter({
		msg : 'words left before you fall into a pit of emptiness.'
	});
	
	
	$("#keepCountingChar").counter({
		goal: 'sky'
	});
	
	$("#keepCountingWord").counter({
		goal: 'sky', 
		type : 'word', 
		msg : 'amazing words'
	});
})(jQuery);