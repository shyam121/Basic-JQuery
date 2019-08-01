<script>
    //when document ready this function calls
    $("document").ready(function(){
        $("body").append('<h1>Hello-world</h1>')  //selecting body tag and appending h1 tag
        $('h1').css("border","1px dotted green")  //adding css to h1 tag
        $('h1:first').css("border","1px dotted green")  //adding css to h1 tag for first coming tag
        $('h1:last').css("border","1px dotted green")  //adding css to h1 tag for last coming tag

        $('#idText').css("border","1px dotted green")  //adding css to tag which have id--> idText
        $('.classText').css("border","1px dotted green")  //adding css to tag which have class--> classText

        //replacing content
        var newText=$("<p>")  //creating p tag
        //appending h1 tag to p tag
        newText.append(               
          "<h1>I just replaced this text</h1>"
        )
        $("#textBox").html(newText);  //replacing content with newText for tag which contains id as ->  textBox

        //Handling Events
        $("#textBox".on("click",function(){
          $("#textBox").html("<h1>You clicked me</h1>");
        }));
              // or
        $("#textBox").click(function(){
          console.log("textBox clicked");
        })
        // $("#textBox".on("mouseleave",functionName);

        // Hover effects ,Hide/Show Events
        $("#textBox").show() //Show 
        $("#textBox").hide() //Hide
        $("#textBox").hover(highlightCopy) //Hover
        function highlightCopy(){
          $(this).toggleClass("highlight")  //toggling-> when hover class there on mouseleave class will be removed
        }

        //Fading
        $("#textBox").fadeIn(3000,function(){  //IT SHOWS block which have id-> textBox
          alert("I am done fadeIn")
        })
        $("#textBox").fadeOut("fast",function(){ //IT HIDES block which have id-> textBox
          alert("I am done fadeOut ")
        })

        //slide
        $("#textBox").slideUp("2000","linear");   //block slide up
        $("#textBox").slideDown("2000","linear"); //block slide down
        $("#textBox").slideToggle("2000",function(){  //block splide up to slide down and vise versa
          alert("slidetoggle done");
        });

        //Toggle
        $("#textBox").toggle(2000,"swing"); //text in block will be swing's

        //Animate
        $("#textBox").animate({width:"500px"},2000)

        //Filters
        //In block with id->containerID for every even p tag css will be added
        //indexes starts from 0
        $("#containerID p:even").css("border","2px solib dashed"); 

        //Selectors
        //all ptag undex div will change
        $("div > p").css("border","2px solib dashed"); 
        //all ptag with class "cname" undex div will change
        $("div > p.cname").css("border","2px solib dashed"); 
        //all ptag which are present under block with id->textId will change
        $("#textId + p").css("border","2px solib dashed"); 

        $("p:first-child")
        $("p:last")
        $("p:last-of-type")
        $("p:contains('Lorem')")  //selecting every paras which contains given string
        $("p:parent")
        $("p:nth-child(3)") //indexes starts from 1
        $("p:last").text("this text will be shown in UI.")

        //we have 3 para's in one div with id-> containerId
        var newTxt=$("#containerId p:first")    //selected 1st para
        //by applying this line 1st line will be removed and rewrite for last para
        $("#containerId p:last").html(newText)  

        //Inserting Content
        $("p:last").append("text prepend at last ")
        $("p:first").prepend("text appended starting ")
        
        //Modifying Content
        $("#containerId p:first").wrap('<div class="newParentCLass>');  //1st para will be appended to div
        $("#containerId p:first").empty();  //1st para removed
        //id--> containerId will be modify with div tag and container changed text
        $("<div>container changed</div>").replaceAll("#container")  
        $("#container").replaceWith("<div>container changed</div>")

        //Modifying CSS
        $("p:first").addClass("colorClass")
        $("p:first").removeClass("colorClass")
        $("p:first").toggleClass("colorClass")  //add/remove vice versa
        $("p:first").css("font-size","+=1px") 
    })

</script>