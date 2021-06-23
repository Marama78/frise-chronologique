$(function(){
    var numberVideos = 17, 
    currentItem=0;
    var choosenIndex=0;
    $windowWidth = $(document).width(),
    $windowHeight = $(document).height()-100;
   var allVideos=0,
    $rootIndex = 0,$oldIndex=0;

   var paramStyleButton_default = {
    margin:'0px',
    position: "relative",
    cursor: "pointer",
    width: "98px",
    height: "98px",
    background: "#000",
    border: "2px solid rgb(95, 51, 51)",
    "border-radius": "5px",
    "box-shadow": "2px 2px 2px rgb(5, 5, 5)",
    opacity: "0.75",
   };
   var paramStyleButton_active = {
    width: "98px",
    height: "98px",
    opacity: "1",
    border: "1px solid rgb(255, 11, 11)",
   };

   
   var upperHeight = $windowHeight-$('#Title').height() - $('#menu').height()-choosenIndex;
console.log(upperHeight);

   var paramStyleButtonArriere={
    width: "45px",
    height:"80px",
    margin:"0.2em 0.5em",
    float : "left",
    "text-align": "center",
    color: "#fff",
    "text-shadow": "1px 1px 1px #000",
    cursor: "pointer",
   }

   var paramStyleButtonAvant={
    width:"45px",
    height:"80px",
    margin:"0.2em 0.5em",
    float:"right",
    "text-align": "center",
    color: "#fff",
    "text-shadow": "1px 1px 1px #000",
    cursor: "pointer",
}
  
var paramStyleBackspace={
    background:"rgba(24, 23, 23,0.5)",
 //   width:$(document).width(),
//  height:upperHeight.toString()+"px",
    color: "gray",
    
   };

var paramStyleUpper={
    background:"#808080",
    width:$(document).width(),
    color: "gray",
    display:'inline',
   
   }
   
var paramStyleVideo={
       margin: '1.5em 0px',
    opacity:"1",
     style:'none',
    "text-align":'center',
   }

   $('#mainScreen').css(paramStyleBackspace);

   $('#upper').css(paramStyleUpper);
   $('#arriere').css(paramStyleButtonArriere);
   $('#avant').css(paramStyleButtonAvant);

   var Description = [];
   Description[0] = "Introduction";
   Description[1] = "Installer Jquery";
   Description[2] = "Les selecteurs";
   Description[3] = "Les évènements";
   Description[4] = "Les effets partie1";
   Description[5] = "Les effets partie2";
   Description[6] = "Manipuler le HTML";
   Description[7] = "Manipuler le CSS";
   Description[8] = "Arborescence de JQuery";
   Description[9] = "Le concept de Ajax";
   Description[10] = "On commence le projet";
   Description[11] = "On continue de coder notre page web";
   Description[12] = "Trouver les polices de caractères";
   Description[13] = "Les ouvertures";
   Description[14] = "Afficher les descriptions";
   Description[15] = "Interactivité";
   Description[16] = "Animation de départ";


    /*----------------
    ** Instantiate the function that will Load the movies
    ------------------*/
    function LoadItem(itemChoosen){

        // Load the movie at the index
        $('.smartBox').html("<p id='description'>"+Description[itemChoosen]+"<p><video class = 'col-8' id='media' src='images/chap"+itemChoosen+".mp4' controls></video>");

        $('#media').animate(paramStyleVideo,200);
        // Change the style of the button above
        var $li = $('#buttonBox').children('#lineVideo').eq(itemChoosen)
        $li.children('.caseVideo').children('.buttonVideo').css( paramStyleButton_active );

        $('#description').css({
            'opacity':'1',
            color: "#fff",
            "text-shadow": "1px 1px 1px #000"});
         
    };

    // restore the default style of the buttons
    function restoreButtons(choosenIndex)
    {
       var $li = $('#buttonBox').children('#lineVideo').eq(choosenIndex)
        $li.children('.caseVideo').children('.buttonVideo').css(paramStyleButton_default );

        //LockHeight();
    }

    // change the style of the buttons and update itemChoosen
    function MouseHoverButtons()
    {
        $('.buttonVideo').on('mouseover',function(){
            //restoreButtons(choosenIndex);
            //find index and log Item from the index
            var hoverIndex = $(this).parent().parent().index();
            //load the movie in the [backSpace] div
            var $li = $('#buttonBox').children('#lineVideo').eq(hoverIndex)
            $li.children('.caseVideo').children('.buttonVideo').css( paramStyleButton_active );
      
            $('#description').html(Description[hoverIndex]);
      
        });


    }

    // restore the default style of the button
    function MouseLeaveButtons()
    {
        $('.buttonVideo').on('mouseleave',function(){
            //restoreButtons(choosenIndex);
            //find index and log Item from the index
            var Index = $(this).parent().parent().index();
            //Restore default style
            if(Index!=choosenIndex)
            {
                var $li = $('#buttonBox').children('#lineVideo').eq(Index)
                $li.children('.caseVideo').children('.buttonVideo').css( paramStyleButton_default );
            }

            $('#description').html(Description[choosenIndex]);

        });
    }

  
// hide or show some buttons
    function PopButton(index, size){
        
        if(index<=$('#buttonBox').children('li').length)
        {
            $rootIndex = index - size;
        }
       

       // var result = $rootIndex - $oldIndex ;

      // if($rootIndex>0 && index>$oldIndex)
       if(index>$oldIndex)
        {
            for(i=0;i<$rootIndex;i++){
               var $target = $('#buttonBox').children('li').eq(i);
               
             //  $target.animate( {width:'0px',opacity: '0',},250);
               $target.hide();

            }

        $oldIndex = index;
        //console.log(' new $oldIndex is :' + $oldIndex );

        }
         if(index<$oldIndex)
        {
            var iteration = index-size;
            var $totalItem = $('#buttonBox').children('li').length;
            if(index==0)
            {
                //RestoreAllButton()
                $rootIndex=0;
                $oldIndex=0;
    
            }
            else
            {
            for(i=$rootIndex;i<index;i++){ 
                var $target = $('#buttonBox').children('li').eq(i);
               
               // $('#videoBox').children('li').css({height:'125px'});
               
                //$target.animate({width:'100px',opacity: '1', },250);
                    
                $target.show();

                var newIndex = i+$oldIndex;
            //console.log('index active :' + newIndex);

            }
            console.log(' iteration is :' + iteration);
            console.log(' index is :' + index);
            $oldIndex = index;
            }
        }

         /*   console.log('to result is :' + result);
       
        console.log('rootIndex is :',$rootIndex);*/
    }

    //display alll the button 
    function RestoreAllButton()
    {
      /*  $('#buttonBox').children('li').css({height:'125px'});
       $('#buttonBox').children('li').animate(
                 {
                    width:'120px',
                    opacity: '1'
                 },250
             );*/
         
    }

    /*----------------
    ** Set the number of the movies and
    ** Build all the videos in the ul {id='videoBox'}
    ------------------*/
    if(currentItem<numberVideos)
        {for(var i=0;i<numberVideos;i++){
            allVideos +="<li id='lineVideo'><div class='caseVideo' id='bw'><video class='buttonVideo' src='images/chap"+currentItem+".mp4' ></video><p>numero:"+currentItem+"</p></div></li>";
            currentItem +=1;
        };
        $('#buttonBox').html(allVideos);
    };

    /*---------------
    ** The buttons above the document
    ----------------- */

    

    $('.buttonVideo').on('click',function(){
        restoreButtons(choosenIndex);
        //find index and log Item from the index
        var Index = $(this).parent().parent().index();
        //load the movie in the [backSpace] div
        LoadItem(Index),
        choosenIndex=Index;
        //console.log('you have choosen the video indexed to:'+choosenIndex);
        
        PopButton(Index,4);
    });


    $('#arriere').on('click',   function(){
        restoreButtons(choosenIndex);

        if(choosenIndex==0)
        {
            var Index = $('#buttonBox').children('li').length-1;
            LoadItem(Index);
            choosenIndex=Index;
            PopButton(Index,4); }
        else{
            var Index = choosenIndex-1;
            LoadItem(Index);
            choosenIndex=Index;
            PopButton(Index,4);
        }
    });
    
   

    $('#avant').on('click',function(){
        restoreButtons(choosenIndex);

        if(choosenIndex==$('#buttonBox').children('li').length-1)
        {
            var Index = 0;
            LoadItem(Index);
            choosenIndex=Index;
            PopButton(Index,4);
        }
        else{
            var Index = choosenIndex+1;
            LoadItem(Index);
            choosenIndex=Index;
            PopButton(Index,4);
        }
    });


   MouseLeaveButtons();
   MouseHoverButtons();
});